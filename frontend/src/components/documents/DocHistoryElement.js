import React from 'react';
import { MdEdit } from 'react-icons/md';

const DocHistoryElement = ({ historyInfo }) => {
  return (
    <li className="w3-bar w3-border-0 w3-margin-bottom">
      <MdEdit className="w3-text-primary w3-margin-right" />
      Changed {historyInfo.changedProperty} to &quot;Something&quot;
      <span className="w3-right w3-text-secondary">
        <em>
          {historyInfo.author}, {historyInfo.changeDate}
        </em>
      </span>
    </li>
  );
};

export default DocHistoryElement;
