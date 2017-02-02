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

                  ]

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
      {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
      {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
      {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
      {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
      {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
      {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
      {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
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
                  <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                  <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
                  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
                  </RadialBarChart>
                </div>
                HIIIIIIIIIII
                <div className="thisisisisis">

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
