import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  requestArticle,
  deleteArticleSubField,
  addArticleSubField
} from '../../actions/articleActions';
import DocPropsElement from './DocPropsElement';
import FormSelectField from './FormSelectField';

class DocProps extends Component {
  componentDidMount = () => {
    const { docId } = this.props;
    this.props.requestArticle(docId);
  };

  grabFieldByName = fieldName => {
    const { fields } = this.props;
    return fields.find(field => field.name === fieldName);
  };

  render = () => {
    const { fields } = this.props;
    const prices = this.grabFieldByName('prices') || {
      name: 'prices',
      value: []
    };
    // if (prices.value.length) {
    //   prices.value = prices.value.map(price => price.name);
    // }
    return (
      <div className="w3-section w3-col l8 m10 s11 w3-card w3-row w3-flex w3-flex-column w3-flex-full-center">
        <div className="w3-section">
          <h2 className="w3-center">Properties</h2>
        </div>
        <div className="w3-col l6 m8 w3-margin-bottom">
          {fields.length ? (
            <div className="w3-container">
              <DocPropsElement
                fieldTitle="name"
                fieldData={this.grabFieldByName('name')}
              />
              <DocPropsElement
                fieldTitle="description"
                fieldData={this.grabFieldByName('description')}
              />
              <DocPropsElement
                fieldTitle="reference"
                fieldData={this.grabFieldByName('reference')}
              />
              <FormSelectField
                fieldTitle="unit of measure"
                fieldDisabled={false}
                documents="articles"
                subFields={{
                  name: 'unit of measure',
                  value: [
                    { _id: '321654878qsdsd', name: 'mock' },
                    { _id: 'qsd56486dsffdg213', name: 'dummy' },
                    { _id: 'aze879865bn312', name: 'data' }
                  ]
                }}
                deleteSubField={this.props.deleteArticleSubField}
              />
              <FormSelectField
                fieldTitle="prices"
                fieldDisabled={false}
                documents="articles"
                subFields={prices}
                deleteSubField={this.props.deleteArticleSubField}
              />
            </div>
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

const mapStateToProps = state => {
  return {
    fields: state.articleReducer.fields
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestArticle: docId => {
      dispatch(requestArticle(docId));
    },
    deleteArticleSubField: (subField, subFieldArr) => {
      dispatch(deleteArticleSubField(subField, subFieldArr));
    },
    addArticleSubField: () => {
      dispatch(addArticleSubField());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocProps);
