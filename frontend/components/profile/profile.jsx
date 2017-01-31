import React from 'react';
import Map from '../map/map';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.ethnicityinfo.bind(this);
    this.state = {
      ethnicities: [],

    };
  }


  ethnicityinfo(){
    return(
      <div className="genetic-info-container">
        <div className="ethnicity-container">
          <div className="ethnicity-name 1">
            Italian
          </div>
          <div className="snp-detail 1">

          </div>
        </div>
        <div className="ethnicity-container">
          <div className="ethnicity-name 2">
            German
          </div>
          <div className="snp-detail 2">

          </div>
        </div>
        <div className="ethnicity-container">
          <div className="ethnicity-name 3">
            Irish
          </div>
          <div className="snp-detail 3">

          </div>
        </div>
        <div className="ethnicity-container">
          <div className="ethnicity-name 4">
            Chinese
          </div>
          <div className="snp-detail 4">

          </div>
        </div>
        <div className="ethnicity-container">
          <div className="ethnicity-name 5">
            Ethiopian
          </div>
          <div className="snp-detail 5">

          </div>
        </div>
        <div className="ethnicity-container">
          <div className="ethnicity-name 6">
            Brazilian
          </div>
          <div className="snp-detail 6">

          </div>
        </div>
        <div className="ethnicity-container">
          <div className="ethnicity-name 7">
            Alien
          </div>
          <div className="snp-detail 7">

          </div>
        </div>

      </div>
    );
  }

  render() {
    let sidebar = this.ethnicityinfo();
    return (
      <div>
        <h1>Inheritage</h1>
        <div className="profile-info-container">
          <div className="profile-top">

          </div>
          { sidebar }
        </div>
        <div className="map-container">
            <Map/>
        </div>
      </div>
    );
  }
}

export default Profile;
