import React from 'react';

class EthnicityForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddInput = this.handleAddInput.bind(this);
  }

  componentDidMount() {

  }

  handleAddInput() {

  }

  render() {
    return(
      <form id="ethnicity-form">
        <input id="ethnicity-form-percent"></input><span>%</span>
        <span id="num-dropdowns">
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
      </form>
    );
  }
}

export default EthnicityForm;
