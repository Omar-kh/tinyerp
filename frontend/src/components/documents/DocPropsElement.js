import React from 'react';

const DocPropsElement = ({ fieldData }) => {
  return (
    <div className="w3-container w3-margin-bottom">
      <label htmlFor={fieldData.name}>
        <h4 className="w3-capitalize">{fieldData.name}</h4>
        <input
          type="text"
          name={fieldData.name}
          id={fieldData.name}
          className="w3-input w3-round w3-border-primary w3-text-primary"
          readOnly={false}
          value={fieldData.value}
        />
      </label>
    </div>
  );
};

export default DocPropsElement;
