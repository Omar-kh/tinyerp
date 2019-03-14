import React from 'react';

const Doclist = () => {
  return (
    <div className="section is-border">
      <div className="columns is-centered">
        <div className="column is-mobile is-full-mobile is-four-fifths">
          <div className="section has-background-white-ter is-border">
            <div className="is-flex is-fully-centered">
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select">
                        <select>
                          <option>Select a property</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select">
                        <select>
                          <option>Between</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field is-narrow">
                    <p className="control">
                      <input className="input" type="text" placeholder="Name" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section is-fully-centered is-border">
              <div className="button is-margin-1 is-primary is-large is-rounded">
                +
              </div>
              <div className="button is-margin-1 is-round-button is-primary is-large">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section is-border" />
    </div>
  );
};

export default Doclist;
