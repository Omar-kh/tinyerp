import React, { Component } from 'react';
import axios from 'axios';
import DocPropsElement from './DocPropsElement';

class DocProps extends Component {
  constructor() {
    super();
    this.state = {
      fields: []
    };
  }

  componentDidMount = async () => {
    const { docId } = this.props;
    try {
      const { data } = await axios({
        method: 'get',
        url: `http://localhost:4000/articles/${docId}`
      });
      const fields =
        docId === 'new'
          ? data
          : data.filter(field => {
              return field.name !== 'changeHistory';
            });
      this.setState({
        fields
      });
    } catch (error) {
      console.log(error);
    }
  };

  render = () => {
    const { fields } = this.state;
    return (
      <div className="w3-section w3-col l8 m10 s11 w3-card w3-row w3-flex w3-flex-column w3-flex-full-center">
        <div className="w3-section">
          <h2 className="w3-center">Properties</h2>
        </div>
        <div className="w3-col l6 m8 w3-margin-bottom">
          {fields.length ? (
            fields.map(field => {
              return <DocPropsElement fieldData={field} />;
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className="w3-bar w3-center w3-margin-bottom">
          <div className="w3-border-primary w3-hover-primary w3-round w3-button w3-margin">
            Modify item
          </div>
          <div className="w3-button w3-text-danger w3-hover-danger w3-border-danger w3-round w3-margin">
            Delete item
          </div>
        </div>
      </div>
    );
  };
}

export default DocProps;
