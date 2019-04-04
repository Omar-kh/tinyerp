import React from 'react';
import DocHistoryElement from './DocHistoryElement';

const DocHistory = ({ history }) => {
  return (
    <div className="w3-section w3-col l8 m10 s11 w3-card w3-row w3-flex w3-flex-column w3-flex-full-center">
      <div className="w3-section">
        <h2 className="w3-center">Change history</h2>
      </div>
      <ul className="w3-section w3-ul w3-col l6 m10 s11">
        {history.map(historyElem => {
          return <DocHistoryElement historyInfo={historyElem} />;
        })}
      </ul>
    </div>
  );
};

export default DocHistory;
