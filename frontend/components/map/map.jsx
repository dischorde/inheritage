import React from 'react';
import Modal from 'react-modal';
import {customStyles} from './modal_style';
import { Link } from 'react-router';

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
    this.pins = ['http://res.cloudinary.com/dtnwzbeum/image/upload/v1486250228/blue-marker_bl0bvf.png', 'http://res.cloudinary.com/dtnwzbeum/image/upload/v1486250236/pink-marker_dfr0xu.png',
     'http://res.cloudinary.com/dtnwzbeum/image/upload/v1486250233/orange-marker_zninxs.png', 'http://res.cloudinary.com/dtnwzbeum/image/upload/v1486250231/green-marker_mb0y98.png',
     'http://res.cloudinary.com/dtnwzbeum/image/upload/v1486250264/purple-marker_yl4djt.png', 'http://res.cloudinary.com/dtnwzbeum/image/upload/v1486250228/blue-marker_bl0bvf.png'];
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
          <Link to={`/snp/${data.snp_id}`}>
          <div className="snp-detail" key={idx}>

            <div className="snp-detail-inner">
              <h2>
                <span className="data-percent">{data.percent}%</span> of {data.pop_name}  {data.summary}
              </h2>
            </div>
          </div>
        </Link>
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
  google.maps.event.addListener('click', function() {
    this.state.map.panTo({lat: 35, lng: -30});
    this.state.map.setZoom(2);
  });
}

componentDidUpdate() {
  if (this.props.zoom !== "") {
    this.zoomMap(this.props.zoom);
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
    this.addMarkersWithTimeOut(this.props.ethnicities[i], map, lat, long, i * 500, i);
  }
}
addMarkersWithTimeOut(ethnicity, map, lat, long, timeout, i) {
  var markers = [];
  let latLng = new google.maps.LatLng(lat, long)
  setTimeout(() => {
    let that = this;

    var marker = new google.maps.Marker({
       position: latLng,
       icon: that.pins[i],
       map,
       animation: google.maps.Animation.DROP,
       visibile: true
     });

    google.maps.event.addListener(marker, 'click', function() {
      that.setState({modalOpen: true, currentEth: ethnicity});
    });

    markers.push(marker);
    }, timeout);

  }

  zoomMap(ethnicity) {
    let lat = ethnicity.lat;
    let long = ethnicity.long;
    let latLng = new google.maps.LatLng(parseInt(lat), parseInt(long))
    this.state.map.panTo(latLng);
    this.state.map.setZoom(4);
  }


  render() {
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
