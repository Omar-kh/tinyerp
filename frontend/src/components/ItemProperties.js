import React, { Component } from 'react';
import { MdEdit } from 'react-icons/md';
import BoxImg from '../public/box.png';

class ItemProperties extends Component {
  constructor() {
    super();
    this.state = {
      fields: [],
      history: []
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log(`http://localhost:4000/items/${id}`);
    const data = await fetch(`http://localhost:4000/items/${id}`);
    const result = await data.json();
    this.setState({
      fields: result.map(fieldName => {
        return {
          name: fieldName,
          readOnly: id !== 'new'
        };
      })
    });
    console.log(result);
  }

  render = () => {
    const { fields } = this.state;
    const itemProperties = fields.map(field => {
      return (
        <div className="w3-container w3-margin-bottom">
          <label htmlFor={field.name}>
            <h4>{field.name}</h4>
            <input
              type="text"
              name={field.name}
              id={field.name}
              className="w3-input w3-round w3-border-primary w3-text-primary"
              readOnly={false}
              value="Something should be displayed here"
            />
          </label>
        </div>
      );
    });
    return (
      <div className="w3-row w3-flex w3-flex-column w3-flex-full-center w3-padding-64">
        <div className="w3-section w3-center">
          <img alt="A box" src={BoxImg} />
          <h1 className="w3-center">Item</h1>
        </div>
        <div className="w3-section w3-col l8 m10 s11 w3-card w3-row w3-flex w3-flex-column w3-flex-full-center">
          <div className="w3-section">
            <h2 className="w3-center">Properties</h2>
          </div>
          <div className="w3-col l6 m8 w3-margin-bottom">
            {fields ? itemProperties : 'Loading...'}
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
        <div className="w3-section w3-col l8 m10 s11 w3-card w3-row w3-flex w3-flex-column w3-flex-full-center">
          <div className="w3-section">
            <h2 className="w3-center">Change history</h2>
          </div>
          <ul className="w3-section w3-ul w3-col l6 m10 s11">
            <li className="w3-bar w3-border-0 w3-margin-bottom">
              <MdEdit className="w3-text-primary w3-margin-right" />
              Changed Property 1 to &quot;Something&quot;
              <span className="w3-right w3-text-secondary">
                <em>Administrator, 1 week ago</em>
              </span>
            </li>
            <li className="w3-bar w3-border-0 w3-margin-bottom">
              <MdEdit className="w3-text-primary w3-margin-right" />
              Changed Property 1 to &quot;Something&quot;
              <span className="w3-right w3-text-secondary">
                <em>Administrator, 1 week ago</em>
              </span>
            </li>
            <li className="w3-bar w3-border-0 w3-margin-bottom">
              <MdEdit className="w3-text-primary w3-margin-right" />
              Changed Property 1 to &quot;Something&quot;
              <span className="w3-right w3-text-secondary">
                <em>Administrator, 1 week ago</em>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}

export default ItemProperties;
