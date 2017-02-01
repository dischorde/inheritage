import React from 'react';
import Map from '../map/map';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.ethnicityInfo = this.ethnicityInfo.bind(this);
    this.ethnicityContainer = this.ethnicityContainer.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.state = {
      ethnicities: [
        {name: "italian",
          percent: "30%",
          lat: 41.9028,
            long: 12.4964},
          {name: "irish",
            percent: "20%",
            lat: 53.3498,
              long: 6.2603},
              {name: "german",
                  percent: "10%",
                  lat: 51.1657,
                    long:  10.4515},
                  {name: "Scotish",
                    percent: "10%",
                    lat: 56.4907 ,
                      long: 4.2026},
                    {name: "Dutch",
                      percent: "10%",
                      lat: 52.1326,
                        long: 5.2913},
                      {name: "Japanese",
                        percent: "10%",
                        lat: 36.2048,
                          long: 138.2529}
                  ]

    };
  }

  ethnicityInfo() {
    return this.state.ethnicities.map(function(ethnicity, idx){
      return (
        <div className="ethnicity-container">
          <div className="ethnicity-name 1">
                {ethnicity.name}
            </div>
            <div className="snp-detail 1">

            </div>
          </div>
      );
    });
  }

  ethnicityContainer() {
    let info = this.ethnicityInfo();
    return(
       <div className="genetic-info-container" >
         {info}
       </div>
    );
  }


  render() {
    let sidebar = this.ethnicityContainer();
    return (
      <div>
        <h1>Inheritage</h1>
        <div className="profile-info-container">
          <div className="profile-top">
            <div className="toggle-side" onClick={() => this.toggleSideBar()}>
              <i className="fa fa-caret-square-o-left fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          { sidebar }

        </div>
        <div className="map-container">
            <Map ethnicities={this.state.ethnicities}/>
        </div>
      </div>
    );
  }
}

export default Profile;
