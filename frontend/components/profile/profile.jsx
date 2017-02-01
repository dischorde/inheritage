import React from 'react';
import Map from '../map/map';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.ethnicityInfo.bind(this);
    this.ethnicityContainer.bind(this);
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
       <div className="genetic-info-container">
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

// ethnicityinfo(){
//   return(
//     <div className="genetic-info-container">
//       <div className="ethnicity-container">
//         <div className="ethnicity-name 1">
//           Italian
//         </div>
//         <div className="snp-detail 1">
//
//         </div>
//       </div>
//       <div className="ethnicity-container">
//         <div className="ethnicity-name 2">
//           German
//         </div>
//         <div className="snp-detail 2">
//
//         </div>
//       </div>
//       <div className="ethnicity-container">
//         <div className="ethnicity-name 3">
//           Irish
//         </div>
//         <div className="snp-detail 3">
//
//         </div>
//       </div>
//       <div className="ethnicity-container">
//         <div className="ethnicity-name 4">
//           Chinese
//         </div>
//         <div className="snp-detail 4">
//
//         </div>
//       </div>
//       <div className="ethnicity-container">
//         <div className="ethnicity-name 5">
//           Ethiopian
//         </div>
//         <div className="snp-detail 5">
//
//         </div>
//       </div>
//       <div className="ethnicity-container">
//         <div className="ethnicity-name 6">
//           Brazilian
//         </div>
//         <div className="snp-detail 6">
//
//         </div>
//       </div>
//       <div className="ethnicity-container">
//         <div className="ethnicity-name 7">
//           Alien
//         </div>
//         <div className="snp-detail 7">
//
//         </div>
//       </div>
//
//     </div>
//   );
// }
