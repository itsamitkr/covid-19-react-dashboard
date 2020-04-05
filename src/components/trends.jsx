import React, { Component } from "react";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
const historicalData = require('./mapData').getHistoricalData();

const options = {
  title: {
    text: ''
  },
  chart: {
      type: 'line'
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: historicalData.categories,
  },
  tooltip: {
    pointFormat: 'Cases: <b>{point.y:.1f}</b>'
  },
  legend: {
    layout: 'horizontal'
  },
  yAxis: {
    type: 'logarithmic',
    title: {
        text: ''
    }
  },
  series: [
    { name: "Total Cases", data: historicalData.caseSeries, key: "totalCases" },
    { name: "Deaths", data: historicalData.deathSeries, key: "totalDeaths" },
    { name: "Recovered", data: historicalData.recoveredSeries, key: "totalRecovered" }
  ],
}

class Trends extends Component {
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}/>
    );
  }
};

export default Trends;