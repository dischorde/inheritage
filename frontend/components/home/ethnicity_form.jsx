import React from 'react';

class EthnicityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      percent1: 0,
      percent2: 0,
      percent3: 0,
      percent4: 0,
      percent5: 0,
      percent6: 0,
      ethnicity1: "",
      ethnicity2: "",
      ethnicity3: "",
      ethnicity4: "",
      ethnicity5: "",
      ethnicity6: ""
    };
    this.handleAddInput = this.handleAddInput.bind(this);
    this.handlePercentChange = this.handlePercentChange.bind(this);
    this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    this.props.requestEthnicities().then(data => {
      console.log(data);
    });
  }

  handleAddInput() {
    const numEthnicities = $(".dropdowns");
    const fieldNum = numEthnicities.children().length + 1;
    if (fieldNum === 6) {
      $(".fa-plus-circle").css('display', 'none');
    }
    const newField = (
      `<div id="dropdown-${fieldNum}">
        <input
          type="text"
          class="ethnicity-form-percent"
          id="percent${fieldNum}"></input>
        <span class="percent">%</span>
        <select
          class="ethnicities-dropdown"
          id="ethnicity${fieldNum}">
          <option selected disabled>ethnicity</option>
          <option value="italian">Italian</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
          <option value="scottish">Scottish</option>
        </select>
        <br></br>
      </div>`
    );
    numEthnicities.append(newField);
    $(`#percent${fieldNum}`).on('change textInput input', this.handlePercentChange);
    $(`#ethnicity${fieldNum}`).on('change', this.handleEthnicityChange);
  }

  handlePercentChange(e) {
    this.setState({ [e.target.id]: parseInt(e.target.value) });
  }

  handleEthnicityChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
    console.log(this.state);
  }

  render() {
    debugger

    return(
      <form id="ethnicity-form">
        <h1>My name is</h1>
        <input
          onChange={this.handleNameChange}
          id="ethnicity-form-name">
        </input>
        <h1>.</h1>
        <h1 id="name-im">I'm...</h1>
        <div className="dropdowns">
          <div id="dropdown-1">
            <input
              type="text"
              className="ethnicity-form-percent"
              id="percent1"
              onChange={this.handlePercentChange}></input>
            <span className="percent">%</span>
            <select
              onChange={this.handleEthnicityChange}
              className="ethnicities-dropdown"
              id="ethnicity1">
              <option selected disabled>ethnicity</option>
              <option value="italian">Italian</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
              <option value="scottish">Scottish</option>
            </select>
            <br></br>
          </div>
        </div>
        <i
          onClick={this.handleAddInput}
          className="fa fa-plus-circle"
          aria-hidden="true">
        </i>
        <br></br><br></br>
        <input type="submit" value="SUBMIT"></input>
      </form>
    );
  }
}

export default EthnicityForm;
