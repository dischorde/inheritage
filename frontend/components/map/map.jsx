import React from 'react';
import Modal from 'react-modal';
import {customStyles} from './modal_style';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const _mapOptions = {
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
  };

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      markers: [],
      modalOpen: false,
      currentEth: "",
      zoom: ""
    };
    this.snpDataPoints = this.snpDataPoints.bind(this);
    this.zoomMap = this.zoomMap.bind(this);
    this._onModalClose = this._onModalClose.bind(this);
    this.setMarkers = this.setMarkers.bind(this);
    this.addMarkersWithTimeOut = this.addMarkersWithTimeOut.bind(this);
}


  snpDataPoints() {
    let ethnicity = this.state.currentEth;
    if ( ethnicity.data_points !== undefined) {
      return ethnicity.data_points.map(function(data, idx) {
        return(
          <div className="snp-detail" key={idx}>
            <i className="fa fa-circle" aria-hidden="true"></i>
            <div className="snp-detail-inner">
              <div className="snp-ref">
                <h1 className="snp">
                  SNP:</h1><h1>{data.snp_name}</h1>
              </div>
              <div className="snp-info">
                <div className="snp-percent">
                  <h1>
                    Susceptibility: {`${data.percent}`}%
                  </h1>
                </div>
                <div className="snp-summary">
                  Likely to: {data.summary}
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="snp-detail">
        </div>
      );
    }
  }

componentDidMount() {
  const map = this.refs.map;
  this.map = new google.maps.Map(map, _mapOptions);
  this.setMarkers(this.map);
  this.setState({map: this.map});
}

componentDidUpdate() {
  if (this.props.zoom !== "") {
    this.zoomMap(this.state.zoom);
  }
  this.snpDataPoints();
}

componentWillMount() {
    Modal.setAppElement('body');
 }


  _onModalClose() {
    this.setState({modalOpen: false });
    customStyles.content.opacity = 0;
  }

  onModalOpen() {
    customStyles.content.opacity = 100;
  }

setMarkers(map) {
  for(let i=0; i < this.props.ethnicities.length; i++){
    let lat = this.props.ethnicities[i].lat;
    let long = this.props.ethnicities[i].long;
    debugger
    this.addMarkersWithTimeOut(this.props.ethnicities[i], map, lat, long, i * 500);
  }
}
addMarkersWithTimeOut(ethnicity, map, lat, long, timeout) {
  var markers = [];
  let latLng = new google.maps.LatLng(lat, long)
  setTimeout(() => {
    let that = this;

    var marker = new google.maps.Marker({
       position: latLng,
       map,
       animation: google.maps.Animation.DROP,
       visibile: true
     });

    google.maps.event.addListener(marker, 'click', function() {
      that.setState({modalOpen: true, currentEth: ethnicity});
    });
    markers.push(marker);
    debugger
    }, timeout);

  }

  zoomMap(ethnicity) {
    let lat = ethnicity.lat;
    let long = ethnicity.long;
    this.state.map.setZoom(4);
    this.state.map.setCenter(lat, long);
  }


  render() {
    console.log(this.state);
    console.log(this.props);
    let ethInfo = this.snpDataPoints();
    return (
      <div className="map" ref="map">Map
        <Modal
           isOpen={this.state.modalOpen}
           onRequestClose={this._onModalClose}
           onAfterOpen={this.onModalOpen}
           contentLabel="Modal"
           style={customStyles}>
           <div className="modal-div">
             <div className="inner-modal-div">
               <div className="modal-eth-name">
                 <h1>{this.state.currentEth.name}</h1>
               </div>
               <div>
                 {ethInfo}
               </div>
             </div>
           </div>
        </Modal>
      </div>
    );
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

// addMarkersWithTimeOut(map, lat, long, timeout) {
//   var markers = [];
//     window.setTimeout(function() {
//          markers.push(new google.maps.Marker({
//            position: {lat: lat, lng: long},
//            map: map,
//            animation: google.maps.Animation.DROP
//          }));
//        }, timeout);
//   }
//
//
