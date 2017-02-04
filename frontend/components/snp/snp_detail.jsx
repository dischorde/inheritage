import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class SnpDetail extends React.Component {
  render() {
    const data = [
      {name: 'Page A', percent: 20},
      {name: 'Page B', percent: 20},
      {name: 'Page C', percent: 10},
      {name: 'Page D', percent: 30},
      {name: 'Page E', percent: 20}
    ];
    return(
      <div id="snp-detail-container">
        <div className="snp-detail-description">
          <h1>Lactose Intolerance</h1>
          <p>Dairy products like milk, yogurt, and cheese contain the sugar lactose. An enzyme called lactase breaks down this sugar. If you don’t produce enough lactase, gut bacteria can convert lactose into gas, causing indigestion.</p>
        </div>
        <div>
          <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Bar dataKey="percent" fill="#FAB675" />
          </BarChart>
        </div>
      </div>
    );
  }
}

export default SnpDetail;
