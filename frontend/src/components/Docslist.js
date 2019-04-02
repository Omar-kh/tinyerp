import React from 'react';
import ListFilter from './ListFilter';
import BoxImg from '../public/box.png';

const Doclist = () => {
  return (
    <div className="w3-row w3-flex w3-flex-column w3-flex-full-center w3-padding-64">
      <div className="w3-section w3-center">
        <img alt="A box" src={BoxImg} />
        <h1 className="w3-center w3-xxlarge">Documents</h1>
        <div className="w3-bar">
          <div className="w3-border-success w3-text-success w3-hover-success w3-round w3-button w3-margin w3-large w3-padding-16">
            Create item
          </div>
          <div className="w3-border-primary w3-hover-primary w3-round w3-button w3-margin w3-large w3-padding-16">
            Mass import
          </div>
        </div>
      </div>
      <div className="w3-col l8 m10 s11 w3-container w3-card w3-section">
        <div className="w3-section">
          <h2 className="w3-center">Filters</h2>
        </div>
        <ListFilter />
        <ListFilter />
        <ListFilter />
        <div className="w3-section w3-center">
          <div className="w3-bar">
            <div className="w3-button w3-text-success w3-border-success w3-hover-success w3-round w3-margin">
              Apply filters
            </div>
            <div className="w3-border-primary w3-hover-primary w3-round w3-button w3-margin">
              Add filter
            </div>
          </div>
        </div>
      </div>
      <div className="w3-section w3-col l8 m10 s11 w3-card">
        <div className="w3-section">
          <h2 className="w3-center">Results</h2>
        </div>
        <div className="w3-container w3-section w3-responsive">
          <table className="w3-table">
            <tr>
              <th className="w3-border-bottom-primary">First Name</th>
              <th className="w3-border-bottom-primary">Last Name</th>
              <th className="w3-border-bottom-primary">Points</th>
              <th className="w3-border-bottom-primary">Points</th>
              <th className="w3-border-bottom-primary">Points</th>
              <th className="w3-border-bottom-primary">Points</th>
              <th className="w3-border-bottom-primary">Points</th>
              <th className="w3-border-bottom-primary w3-right-align">
                Points
              </th>
            </tr>
            <tr className="w3-card w3-hover-primary">
              <td>Adam</td>
              <td>Johnson</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td className="w3-right-align w3-text-secondary">
                <em>2 days ago</em>
              </td>
            </tr>
            <tr className="w3-card w3-hover-primary">
              <td>Adam</td>
              <td>Johnson</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td className="w3-right-align w3-text-secondary">
                <em>2 days ago</em>
              </td>
            </tr>
            <tr className="w3-card w3-hover-primary">
              <td>Adam</td>
              <td>Johnson</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td>6767</td>
              <td className="w3-right-align w3-text-secondary">
                <em>2 days ago</em>
              </td>
            </tr>
          </table>
          {/* <div className="w3-section">
            <ul className="w3-ul">
              <li className="w3-section w3-border-bottom-primary w3-flex w3-flex-row w3-hide-small">
                <div className="w3-quarter w3-container">ID</div>
                <div className="w3-quarter w3-container">Property</div>
                <div className="w3-quarter w3-container">Property</div>
                <div className="w3-quarter w3-right-align">Modified</div>
              </li> */}
          {/* <li className="w3-section w3-border-bottom-primary w3-row w3-hide-small">
                <div className="w3-col l2 m3 s3 w3-container">ID</div>
                <div className="w3-col l4 m3 s3 w3-container">Property</div>
                <div className="w3-col l4 m3 s3 w3-container">Property</div>
                <div className="w3-col l2 m3 s3 w3-right-align">Modified</div>
              </li> */}
          {/* <li className="w3-flex w3-flex-row w3-multiline w3-section w3-round w3-card w3-hover-primary">
                <div className="w3-quarter w3-mobile w3-container w3-row">
                  <span className="w3-hide-large w3-hide-medium w3-col s4 w3-margin-right">
                    <strong>ID</strong>
                  </span>
                  INV-0655-82
                </div>
                <div className="w3-quarter w3-mobile w3-container">
                  <span className="w3-hide-large w3-hide-medium w3-col s4 w3-margin-right">
                    <strong>Property</strong>
                  </span>
                  Something
                </div>
                <div className="w3-quarter w3-mobile w3-container">
                  <span className="w3-hide-large w3-hide-medium w3-col s4 w3-margin-right">
                    <strong>Property</strong>
                  </span>
                  Something else
                </div>
                <div className="w3-quarter w3-mobile w3-right-align">
                  <em className="w3-text-secondary">2 days ago</em>
                </div>
              </li> */}
          {/* <li className="w3-row w3-section w3-round w3-card w3-hover-primary">
                <div className="w3-col l2 m3 w3-container w3-row">
                  <span className="w3-hide-large w3-hide-medium w3-col s4 w3-margin-right">
                    <strong>ID</strong>
                  </span>
                  INV-0655-82
                </div>
                <div className="w3-col l4 m3 w3-container">
                  <span className="w3-hide-large w3-hide-medium w3-col s4 w3-margin-right">
                    <strong>Property</strong>
                  </span>
                  Something
                </div>
                <div className="w3-col l4 m3 w3-container">
                  <span className="w3-hide-large w3-hide-medium w3-col s4 w3-margin-right">
                    <strong>Property</strong>
                  </span>
                  Something else
                </div>
                <div className="w3-col l2 m3 w3-right-align">
                  <em className="w3-text-secondary">2 days ago</em>
                </div>
              </li> */}
          {/* </ul>
          </div> */}
        </div>
        <div className="w3-center w3-section">
          <div className="w3-bar">
            {' '}
            <button type="button" className="w3-button w3-hover-primary">
              &lt; Previous
            </button>{' '}
            <button
              type="button"
              className="w3-button w3-hover-primary w3-primary"
            >
              1
            </button>{' '}
            <button type="button" className="w3-button w3-hover-primary">
              2
            </button>{' '}
            <button type="button" className="w3-button w3-hover-primary">
              3
            </button>{' '}
            <button type="button" className="w3-button w3-hover-primary">
              Next &gt;
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doclist;
