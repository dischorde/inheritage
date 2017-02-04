import React from 'react';
import Map from '../map/map';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.zoomMap = this.zoomMap.bind(this);
    this.ethnicityInfo = this.ethnicityInfo.bind(this);
    this.ethnicityContainer = this.ethnicityContainer.bind(this);
    this.state = {
      zoom: "",
      ethnicities: [
        { name: "South East Asian",
          percent: 50,
          lat: 12.222,
          long: 46.100,
            data_points: [
              {
                snp_name: "rs713598",
                percent: 34,
                summary: "Possibly unalbe to taste bitter foods",
                specific: false,
                pop_name: "South East Asian",
                id: 2
              }
            ]},
            {  name: "European",
                percent: 50,
                lat: 69.200,
                long: 70.300,
                  data_points: [
                    {
                      snp_name: "rs713598",
                      percent: 42,
                      summary: "Definitely taste bitter foods",
                      specific: false,
                      pop_name: "South East Asian",
                      id: 2
                    }
                  ]},
          { name: "irish",
            percent: 50,
            lat: 53.3498,
              long: 6.2603,
              data_points: []},
              {name: "german",
                  percent: 10,
                  lat: 51.1657,
                    long:  10.4515}
                  ],
                  name: "Cholo Katwyn",
                  profileId: 1
            };
          }

  // componentDidMount() {
  //   this.props.fetchProfile();
  // }



  ethnicityInfo() {
    let that = this;
    return this.state.ethnicities.map(function(ethnicity, idx){
      var ethnicities = `ethnicity-container-${idx}`;
      return (
        <div className={ethnicities} key={idx}>
          <div className="ethnicity-name" onClick={()=> that.zoomMap(ethnicity)}>
                {ethnicity.name}
            </div>
          </div>
      );
    });
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


  render() {
    const data = [
      {name: this.state.ethnicities[0].name, uv: 31.47, pv: 2400, fill: '#FAB675'},
      {name: this.state.ethnicities[1].name, uv: 26.69, pv: 4567, fill: '#779CF5'},
      {name: this.state.ethnicities[2].name, uv: 15.69, pv: 1398, fill: '#8FE6FA'},
      {name: this.state.ethnicities[3].name, uv: 8.22, pv: 9800, fill: '#F77F80'},
    ];

    const style = {
    	top: 0,
    	left: 350,
    	lineHeight: '24px'
    };

    let sidebar = this.ethnicityContainer();
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
                  <h1>{this.state.name}</h1>
                </div>

          </div>
          { sidebar }

        </div>
        <div className="map-container">
            <Map ethnicities={this.state.ethnicities} zoom={this.state.zoom}/>
        </div>
      </div>
    );
  }
}

export default Profile;

  // <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
