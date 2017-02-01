import React from 'react';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

// let _mapOptions = {
// center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
// zoom: 13,
// mapTypeId: google.maps.MapTypeId.ROADMAP,
// };

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _mapOptions : {
        center: {lat: 35, lng: -30},
  	     zoom: 2,
  	     minZoom: 2,
         backgroundColor: "#464646",
          styles: [
            {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#424647'}]
          }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          { hue: "#B6B6B6" ,
          color: "#B6B6B6"}
        ]
      } ,  {
         featureType: "administrative",
         elementType: "geometry.fill",
         stylers: [
            { visibility: "off" }
         ]
       },
              {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
          ]
        },
        {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            { visibility: "off" }
        ]
      },  {
        featureType: "landscape",
        stylers: [
            {
              "visibility": "off"
            }
        ]
    },
    {
        featureType: "water",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "lightness": -98
            }, {
              color: '#212121'} ]
      }, {
      featureType: "poi",
      stylers: [{ visibility: "off" }]
      } ,
       { featureType: "road",
         stylers: [{ visibility: "off" } ] }
    ]
    }
  };
  this.setMarkers = this.setMarkers.bind(this);
  this.addMarkersWithTimeOut = this.addMarkersWithTimeOut.bind(this);
}


componentDidMount() {
  const map = this.refs.map;
  this.map = new google.maps.Map(map, this.state._mapOptions);
  
  this.setMarkers(this.map);
}

setMarkers(map) {
  for(let i=0; i < this.props.ethnicities.length; i++){
    let lat = this.props.ethnicities[i].lat;
    let long = this.props.ethnicities[i].long;
    this.addMarkersWithTimeOut(map, lat, long, i * 400);

  }
}
addMarkersWithTimeOut(map, lat, long, timeout) {
  var markers = [];
    window.setTimeout(function() {
         markers.push(new google.maps.Marker({
           position: {lat: lat, lng: long},
           map: map,
           animation: google.maps.Animation.DROP
         }));
       }, timeout);
  }

  _registerListeners() {
    google.maps.event.addListener(map, 'click', function(event){
          this.setOptions({scrollwheel:true});
        });
  }

  render() {
    return <div className="map" ref="map">Map</div>;
  }

}

export default Map;

//
// componentDidMount() {
//   const map = this.refs.map;
//   this.map = new google.maps.Map(map, this.state._mapOptions);
//
//   var marker = new google.maps.Marker({
//           position: {
//              lat: 41.9028, lng: 12.4964
//           },
//           map: this.map,
//           title: '!'
//         });
// }

// var marker = new google.maps.Marker({
//       position: {
//               lat: lat, lng: long
//             },
//        map: map,
//        title: 'Hello World!'
//      });
