import React from 'react';
import Map from '../map/map';
import { RadialBarChart, RadialBar, Legend } from 'recharts';



class Profile extends React.Component {

  constructor(props){
    super(props);
    this.ethnicityInfo = this.ethnicityInfo.bind(this);
    this.ethnicityContainer = this.ethnicityContainer.bind(this);
    this.mapData = this.mapData.bind(this);
    this.zoomMap = this.zoomMap.bind(this);
    this.state = {
      loading: true,
      zoom: "",
      profile: {},
      colors: [
        "#8FE6FA",
        "#F77F80",
        "#FAB675",
        "#3CCD70",
        "#779CF5",
        "#8FE6FA"
      ]

    };
  }

  componentDidMount(){
    this.props.requestProfile(this.props.params.profileId).then(() => {
      this.setState({ loading: false });
    });
  }



  ethnicityInfo() {
    let that = this;
    if (this.props.profile.ethnicities !== undefined) {
      return this.props.profile.ethnicities.map(function(ethnicity, idx){
        var ethnicities = `ethnicity-container-${idx}`;
        return (
          <div className={ethnicities} key={idx}>
            <div className="ethnicity-name" >
                  {ethnicity.name}
              </div>
            </div>
        );
      });
    }
  }

  zoomMap(ethnicity) {
    this.setState({zoom: ethnicity});
  }

  ethnicityContainer() {
    let info = this.ethnicityInfo();
    return(
       <div className="genetic-info-container" >
         {info}
       </div>
    );
  }

  mapData() {
    if (this.props.profile.ethnicities === undefined) {
      return {};
    } else {
      let that = this;
      return this.props.profile.ethnicities.map(function(eth, idx) {
        return {name: eth.name, percent: eth.percent , fill: that.state.colors[idx]} ;
      });
    }
  }

  render() {
    let sidebar = this.ethnicityContainer();
    let data = this.mapData() ;

    if (this.state.loading) {
      return <h1></h1>;
    }

    const style = {
    	top: 0,
    	left: 350,
    	lineHeight: '24px'
    };
    return (
      <div>
        <h1>Inheritage</h1>
        <div className="profile-info-container">
          <div className="profile-top">
            <div className="toggle-side" >
              <i className="fa fa-caret-square-o-left fa-2x" aria-hidden="true"></i>
              </div>
                <div className="profile-chart">
                  <RadialBarChart width={230} height={100} cx={100} cy={100} innerRadius={10} outerRadius={100} barSize={10} data={data}>
                  <RadialBar minAngle={15} maxAngle={90} label background clockWise={true} dataKey='percent' fillOpacity={1}/>
                  </RadialBarChart>
                </div>
                <div className="user-name">
                  <h1>{this.props.profile.name}</h1>
                </div>

          </div>
          { sidebar }

        </div>
        <div className="map-container">
            <Map ethnicities={this.props.profile.ethnicities} zoom={this.state.zoom}/>
        </div>
      </div>
    );
  }
}

export default Profile;

  // <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
