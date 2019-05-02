import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteSubField } from '../../actions/subFieldsActions';

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

  handleClick = subField => {
    this.props.deleteSubField(subField);
  };

  render = () => {
    const { options } = this.state;
    console.log(options);
    const { fieldDisabled, fieldTitle, subFields } = this.props;
    return (
      <div className="w3-margin-bottom">
        <h4 className="w3-capitalize">{fieldTitle}</h4>
        {subFields.map(subField => {
          return (
            <div className="w3-row w3-flex w3-flex-full-center w3-margin-bottom">
              <div className="w3-col s7">
                <select
                  value={subField}
                  disabled={fieldDisabled}
                  type="text"
                  className="w3-select w3-padding w3-text-primary w3-round w3-border-primary w3-full-focus"
                  onChange={() => {}}
                >
                  {options.map(option => {
                    return <option value={option.name}>{option.name}</option>;
                  })}
                  <option value={subField}>{subField}</option>
                </select>
              </div>
              <div className="w3-col s5">
                <button
                  type="button"
                  className="w3-button w3-text-danger w3-hover-danger w3-border-danger w3-round w3-right"
                  onClick={() => {
                    this.handleClick(subField);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        <div className="w3-button w3-text-success w3-hover-success w3-border-success w3-round">
          Add
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    fields: state.fields,
    subFields: state.subFields
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteSubField: subField => {
      dispatch(deleteSubField(subField));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSelectField);
