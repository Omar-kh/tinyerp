import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FormSelectField extends Component {
  constructor() {
    super();
    this.state = {
      options: []
    };
  }

  componentDidMount = async () => {
    const { documents } = this.props;
    try {
      const { data } = await axios({
        method: 'get',
        url: `http://localhost:4000/${documents}`
      });
      this.setState({
        options: data
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleRemoveClick = subField => {
    this.props.deleteSubField(subField, 'prices');
  };

  handleAddClick = () => {
    this.props.addSubField();
  };

  render = () => {
    const { options } = this.state;
    console.log(this.props);
    console.log(options);
    const { fieldDisabled, fieldTitle, subFields } = this.props;
    return (
      <div className="w3-margin-bottom">
        <h4 className="w3-capitalize">{fieldTitle}</h4>
        {subFields.value.length ? (
          subFields.value.map(subField => {
            return (
              <div
                key={subField._id}
                className="w3-row w3-flex w3-flex-full-center w3-margin-bottom"
              >
                <div key={subField._id} className="w3-col s7">
                  <select
                    defaultValue={subField._id}
                    key={subField._id}
                    disabled={fieldDisabled}
                    type="text"
                    className="w3-select w3-padding w3-text-primary w3-round w3-border-primary w3-full-focus"
                  >
                    {options.map(option => {
                      return (
                        <option key={option.name} value={option.name}>
                          {option.name}
                        </option>
                      );
                    })}
                    <option key={subField._id} value={subField._id}>
                      {subField.name}
                    </option>
                  </select>
                </div>
                <div className="w3-col s5">
                  <button
                    type="button"
                    className="w3-button w3-text-danger w3-hover-danger w3-border-danger w3-round w3-right"
                    onClick={() => {
                      this.props.deleteSubField(subField, fieldTitle);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w3-row w3-flex w3-flex-full-center w3-margin-bottom">
            <div className="w3-col s7">
              <select
                value="No data found"
                disabled
                type="text"
                className="w3-select w3-padding w3-text-primary w3-round w3-border-primary w3-full-focus"
                onChange={() => {}}
              >
                <option value="No Data">No Data</option>
              </select>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={this.handleAddClick}
          className="w3-button w3-text-success w3-hover-success w3-border-success w3-round"
        >
          Add
        </button>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    fields: state.articleReducer.fields
  };
};

export default connect(mapStateToProps)(FormSelectField);
