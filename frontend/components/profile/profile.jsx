import React from 'react';
import Map from '../map/map';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.ethnicityInfo = this.ethnicityInfo.bind(this);
    this.ethnicityContainer = this.ethnicityContainer.bind(this);
    // this.barChart = this.barChart.bind(this);
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

                  ],
                  name: "Cholo Katwyn"

    };
  }

  ethnicityInfo() {
    return this.state.ethnicities.map(function(ethnicity, idx){
      var ethnicities = `ethnicity-container-${idx}`;
      return (
        <div className={ethnicities} key={idx}>
          <div className="ethnicity-name">
                {ethnicity.name}
            </div>
            <div className="snp-detail">

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
    const data = [
      {name: this.state.ethnicities[0].name, uv: 31.47, pv: 2400, fill: '#FAB675'},
      {name: this.state.ethnicities[1].name, uv: 26.69, pv: 4567, fill: '#779CF5'},
      {name: this.state.ethnicities[2].name, uv: 15.69, pv: 1398, fill: '#8FE6FA'},
      {name: this.state.ethnicities[3].name, uv: 8.22, pv: 9800, fill: '#F77F80'},
      {name: this.state.ethnicities[4].name, uv: 8.63, pv: 3908, fill: '#3CCD70'},
      {name: this.state.ethnicities[5].name, uv: 2.63, pv: 4800, fill: '#FAB675'}
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
            <Map ethnicities={this.state.ethnicities}/>
        </div>
      </div>
    );
  }
}

export default Profile;

  // <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
