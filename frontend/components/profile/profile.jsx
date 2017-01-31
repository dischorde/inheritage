import React from 'react';
import Map from '../map/map';

class Profile extends React.Component {


  render() {
    return (
      <div>
        <h1>Inheritage</h1>
        <div className="map-container">
            <Map/>
        </div>
      </div>
    );
  }
}

export default Profile;
