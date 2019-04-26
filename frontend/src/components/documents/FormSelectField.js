import React, { Component } from 'react';
import axios from 'axios';

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

  render = () => {
    const { options } = this.state;
    console.log(options);
    const { subFields, fieldDisabled } = this.props;
    return subFields.map(subField => {
      return (
        <div className="w3-row w3-container w3-flex w3-flex-full-center">
          <div className="w3-col s7">
            <select
              disabled={fieldDisabled}
              type="text"
              className="w3-select w3-padding w3-text-primary w3-round w3-border-primary w3-full-focus"
            >
              {options.map(option => {
                return <option value={option.name}>{option.name}</option>;
              })}
            </select>
          </div>
          <div className="w3-col s5">
            <div className="w3-button w3-text-danger w3-hover-danger w3-border-danger w3-round w3-right">
              Remove filter
            </div>
          </div>
        </div>
      );
    });
  };
}

export default FormSelectField;
