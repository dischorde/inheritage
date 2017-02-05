import React from 'react';
import { withRouter } from 'react-router';

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
      ethnicity1: null,
      ethnicity2: null,
      ethnicity3: null,
      ethnicity4: null,
      ethnicity5: null,
      ethnicity6: null,
      errors: ""
    };
    this.handleAddInput = this.handleAddInput.bind(this);
    this.handlePercentChange = this.handlePercentChange.bind(this);
    this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestEthnicities();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({ errors: "Please enter your name." });
      return;
    }
    const numEthnicities = $(".dropdowns").children().length;
    const ethnicities = [];
    let sumPercents = 0;
    for (let i = 1; i <= numEthnicities; i++) {
      if (isNaN(this.state[`percent${i}`])) {
        this.setState({ errors: "Please enter number values for the percents." });
        return;
      }
      if (!this.state[`ethnicity${i}`]) {
        this.setState({ errors: "Please make sure you select your ethnicities." });
        return;
      }

      ethnicities.push(
        {
          percent: this.state[`percent${i}`],
          id: this.state[`ethnicity${i}`]
        }
      );

      sumPercents += this.state[`percent${i}`];
    }

    if (sumPercents !== 100) {
      this.setState({ errors: "Please make sure your percents add up to 100." });
      return;
    }

    const profile = {
      name: this.state.name,
      ethnicities
    };


    this.props.createProfile(profile).then((data) => {
      this.props.router.push(`/profile/${data.profile}`);
    });
  }

  handleAddInput() {
    const options = (this.props.ethnicities).map(ethnicity => (
      `<option key=${ethnicity.id} value=${ethnicity.id}>${ethnicity.name}</option>`
    ));

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
          ${options}
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
  }

  render() {
    // debugger
    return(
      <form id="ethnicity-form">
        <h1>My name is</h1>
        <input
          onChange={this.handleNameChange}
          id="ethnicity-form-name">
        </input>
        <h1>.</h1>
        <h1 id="name-im">I'm...</h1>
        <p id="ethnicity-errors">{this.state.errors}</p>
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
              <option selected="selected" disabled>ethnicity</option>
              {this.props.ethnicities.map(ethnicity => (
                <option key={ethnicity.id} value={ethnicity.id}>{ethnicity.name}</option>
              ))}
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
        <input
          onClick={this.handleSubmit}
          type="submit"
          value="SUBMIT"></input>
      </form>
    );
  }
}

export default withRouter(EthnicityForm);
