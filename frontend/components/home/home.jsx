import React from 'react';
import EthnicityFormContainer from './ethnicity_form_container';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="home-img">
          <section className="typewriter">
            <h1>discover <span>you.</span></h1>
          </section>
          <section id="see-more">
            <p>scroll for more</p>
            <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
          </section>
        </div>
        <div id="ethnicity-form-container">
          <h1>I'm...</h1>
          <EthnicityFormContainer />
        </div>
      </div>
    );
  }
}

export default Home;
