import React, { Component } from 'react';
import axios from 'axios';
import BoxImg from '../public/box.png';
import DocProps from './DocProps';
import DocHistory from './DocHistory';

class DocView extends Component {
  constructor() {
    super();
    this.state = {
      fields: [],
      history: []
    };
  }

  componentDidMount = async () => {
    const { docId } = this.props.match.params;
    const { data } = await axios({
      method: 'get',
      url: `http://localhost:4000/items/${docId}`
    });
    if (docId === 'new') {
      this.setState({
        fields: data.map(key => {
          return { name: key, value: '' };
        })
      });
    } else {
      const fields = data
        ? Object.keys(data).map(key => {
            return { name: key, value: data[key] };
          })
        : ['No document found for this id'];
      this.setState({
        fields
      });
    }
  };

  render = () => {
    const { fields, history } = this.state;
    return (
      <div className="w3-row w3-flex w3-flex-column w3-flex-full-center w3-padding-64">
        <div className="w3-section w3-center">
          <img alt="A box" src={BoxImg} />
          <h1 className="w3-center">Item</h1>
        </div>
        {fields.length ? <DocProps fields={fields} /> : <h2>Loading</h2>}
        {history.length ? <DocHistory history={history} /> : null}
      </div>
    );
  };
}

export default DocView;
