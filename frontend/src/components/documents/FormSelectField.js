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
        <select
          disabled={fieldDisabled}
          type="text"
          className="w3-select w3-round w3-border-primary w3-full-focus w3-col w3-quarter w3-margin"
        >
          {options.map(option => {
            return <option value={option.name}>{option.name}</option>;
          })}
        </select>
      );
    });
  };
}

export default FormSelectField;
