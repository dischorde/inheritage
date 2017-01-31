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
        center: {lat: 15, lng: 0},
  	     zoom: 3,
  	     minZoom: 3,
         backgroundColor: "#B6B6B6",
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
        featureType: "administrative.country",
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
                "lightness": -90
            }, {
              color: '#424647'} ]
      }, {
      featureType: "poi",
      stylers: [{ visibility: "off" }]
      } ,
       { featureType: "road",
         stylers: [{ visibility: "off" } ] }
    ]
    }
  };
}

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, this.state._mapOptions);
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
