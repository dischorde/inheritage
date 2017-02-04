import React from 'react';
import Map from '../map/map';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.ethnicityInfo = this.ethnicityInfo.bind(this);
    this.ethnicityContainer = this.ethnicityContainer.bind(this);
    this.mapData = this.mapData.bind(this);
    this.state = {
      loading: true,
      zoom: "",
      profile: {},
      colors: [
        "#FAB675",
        "#779CF5",
        "#8FE6FA",
        "#F77F80",
        "#3CCD70",
        "#FAB675"
      ],
      uv: [31.47, 26.69, 15.69, 8.22, 6, 4],
      pv: [2400, 4567, 1398,  9800, 4000, 2000, 1000]
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

  // zoomMap(ethnicity) {
  //   this.setState({zoom: ethnicity});
  // }

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
        return {name: eth.name, uv: that.state.uv[idx],
           pv: that.state.pv[idx], fill: that.state.colors[idx]} ;
      });
    }
  }

  render() {

    // let ethnicity = (this.props.profile.ethnicities === undefined) ? "" : this.props.profile.ethnicities;
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
                  <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
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

  // ethnicities: [
  //   { name: "South East Asian",
  //     percent: 50,
  //     lat: 12.222,
  //     long: 46.100,
  //       data_points: [
  //         {
  //           snp_name: "rs713598",
  //           percent: 34,
  //           summary: "Possibly unalbe to taste bitter foods",
  //           specific: false,
  //           pop_name: "South East Asian",
  //           id: 2
  //         }
  //       ]},
  //       {  name: "European",
  //           percent: 50,
  //           lat: 69.200,
  //           long: 70.300,
  //             data_points: [
  //               {
  //                 snp_name: "rs713598",
  //                 percent: 42,
  //                 summary: "Definitely taste bitter foods",
  //                 specific: false,
  //                 pop_name: "South East Asian",
  //                 id: 2
  //               }
  //             ]},
  //     { name: "irish",
  //       percent: 50,
  //       lat: 53.3498,
  //         long: 6.2603,
  //         data_points: []},
  //         {name: "german",
  //             percent: 10,
  //             lat: 51.1657,
  //               long:  10.4515}
  //             ],
  //             name: "Cholo Katwyn",
  //             profileId: 1
  //       };

  // const data = [
  //   {name: this.state.ethnicities[0].name, uv: 31.47, pv: 2400, fill: '#FAB675'},
  //   {name: this.state.ethnicities[1].name, uv: 26.69, pv: 4567, fill: '#779CF5'},
  //   {name: this.state.ethnicities[2].name, uv: 15.69, pv: 1398, fill: '#8FE6FA'},
  //   {name: this.state.ethnicities[3].name, uv: 8.22, pv: 9800, fill: '#F77F80'},
  // ];
