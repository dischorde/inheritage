import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class SnpDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.requestSnp(this.props.params.snpId).then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return <h1></h1>;
    }
    const snpArr = [];
    const snpData = this.props.snp.data_points;
    for (var point in snpData) {
      snpArr.push(snpData[point]);
    }

    const data = snpArr;
    return(
      <div>
        <div className="snp-detail-container">
          <div className="snp-detail-img">
            <h1>{this.props.snp.name}</h1>
            <p className="snp-description">{this.props.snp.description}</p>
          </div>
        </div>

        <div className="bar-container">
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
