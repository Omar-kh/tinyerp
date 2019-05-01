import React from 'react';

const DocPropsElement = ({ fieldData, fieldTitle }) => {
  return (
    <div className="w3-margin-bottom">
      <h4 className="w3-capitalize">{fieldTitle}</h4>
      <label htmlFor={fieldData.name}>
        <input
          type="text"
          name={fieldData.name}
          id={fieldData.name}
          className="w3-input w3-round w3-border-primary w3-text-primary"
          readOnly={false}
          value={fieldData.value ? fieldData.value : undefined}
        />
      </label>
    </div>
  );
};

export default DocPropsElement;
