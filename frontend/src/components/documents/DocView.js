import React, { Component } from 'react';
import axios from 'axios';
import BoxImg from '../../public/box.png';
import ArticleForm from './ArticleForm';
import InvoiceForm from './InvoiceForm';
import OrderForm from './OrderForm';
import UnitForm from './UnitForm';
import CurrencyForm from './CurrencyForm';
import DocHistory from './DocHistory';

class DocView extends Component {
  constructor() {
    super();
    this.state = {
      history: []
    };
  }

  // componentDidMount = async () => {
  //   const { docId, documents } = this.props.match.params;
  //   try {
  //     const { data } = await axios({
  //       method: 'get',
  //       url: `http://localhost:4000/${documents}/${docId}`
  //     });

  //     if (docId === 'new') {
  //       this.setState({
  //         fields: data.map(key => {
  //           return { name: key, value: '' };
  //         })
  //       });
  //     } else {
  //       const fields = Object.keys(data).length
  //         ? Object.keys(data).map(key => {
  //             return { name: key, value: data[key] };
  //           })
  //         : ['No document'];
  //       this.setState({
  //         fields
  //       });
  //     }
  //   } catch (error) {
  //     if (error.message === 'Request failed with status code 404') {
  //       this.setState({
  //         fields: ['Sorry, this document type does not seem to exist.']
  //       });
  //     } else if (error.message === 'Request failed with status code 500') {
  //       this.setState({
  //         fields: ['Sorry, an error seem to have happened on the server.']
  //       });
  //     } else {
  //       this.setState({
  //         fields: ['Sorry, it seems something went wrong.']
  //       });
  //       console.log(error);
  //     }
  //   }
  // };

  switchDocumentForm = (documents, docId) => {
    switch (documents) {
      case 'articles':
        return <ArticleForm docId={docId} />;
      case 'invoices':
        return <InvoiceForm docId={docId} />;
      case 'units':
        return <UnitForm docId={docId} />;
      case 'orders':
        return <OrderForm docId={docId} />;
      case 'currencies':
        return <CurrencyForm docId={docId} />;
      default:
        return <h2>This type of document does not seem to exist.</h2>;
    }
  };

  render = () => {
    const { history } = this.state;
    const { match } = this.props;
    const { documents, docId } = match.params;
    return (
      <div className="w3-row w3-flex w3-flex-column w3-flex-full-center w3-padding-64">
        <div className="w3-section w3-center">
          <img alt="A box" src={BoxImg} />
          <h1 className="w3-center">Item</h1>
        </div>
        {this.switchDocumentForm(documents, docId)}
        {history.length ? <DocHistory history={history} /> : null}
      </div>
    );
  };
}

export default DocView;
