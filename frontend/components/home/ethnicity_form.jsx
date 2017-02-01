import React from 'react';

class EthnicityForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddInput = this.handleAddInput.bind(this);
  }

  componentDidMount() {

  }

  handleAddInput() {
    const form = document.getElementById("ethnicity-form");
    const newField = (
      <div>
        <input id="ethnicity-form-percent"></input><span>%</span>
        <span id="dropdowns">
          <select id="ethnicities-dropdown" name="ethnicities-dropdown">
            <option selected disabled>ethnicity</option>
            <option value="italian">Italian</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="Scottich">Scottish</option>
          </select>
          <i onClick={this.handleAddInput} className="fa fa-plus-circle" aria-hidden="true"></i>
          <br></br>
        </span>
      </div>
    );
    form.appendChild(newField);
  }

  render() {
    return(
      <form id="ethnicity-form">
        <div>
          <input id="ethnicity-form-percent"></input><span>%</span>
          <span id="dropdowns">
            <select id="ethnicities-dropdown" name="ethnicities-dropdown">
              <option selected disabled>ethnicity</option>
              <option value="italian">Italian</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
              <option value="Scottich">Scottish</option>
            </select>
            <i onClick={this.handleAddInput} className="fa fa-plus-circle" aria-hidden="true"></i>
            <br></br>
          </span>
        </div>
      </form>
    );
  }
}

export default EthnicityForm;
