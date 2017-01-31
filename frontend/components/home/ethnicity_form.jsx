import React from 'react';

class EthnicityForm extends React.Component {
  render() {
    return(
      <div id="ethnicity-form">
        <input id="ethnicity-form-percent" placeholder="%"></input>
        <select className="styled-select" name="ethnicities-dropdown">
          <option selected disabled>choose an ethnicity</option>
          <option value="italian">Italian</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
          <option value="Scottich">Scottish</option>
        </select>
      </div>
    );
  }
}

export default EthnicityForm;
