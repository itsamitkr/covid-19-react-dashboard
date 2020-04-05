import React, { Component } from "react";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


class Trends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendLine: {}
    }
  }

  static getHistoricalData(items) {
    let trendLine = {
      "categories": [],
      "caseSeries": [],
      "deathSeries": [],
      "deathSeries": [],
      "recoveredSeries": []
    };

    if (items.length > 0){
      const timelineKeys = Object.keys(items[0].timeline.cases);

      trendLine.categories = timelineKeys;

      timelineKeys.map(function(key, i) {
         let cases = 0;
         let deaths = 0;
         let recovered = 0;

         items.map(function(object, i){
            cases = cases + object.timeline.cases[key];
            deaths = deaths + object.timeline.deaths[key];
            recovered = recovered + object.timeline.recovered[key];
         });

         trendLine.caseSeries.push(cases);
         trendLine.deathSeries.push(deaths);
         trendLine.recoveredSeries.push(recovered);
      });
    }
    return trendLine;
  }

  render() {
    const trendLine = Trends.getHistoricalData(this.props.data)
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
        categories: trendLine.categories,
      },
      tooltip: {
        pointFormat: 'Cases: <b>{point.y:.1f}</b>'
      },
      legend: {
        layout: 'horizontal'
      },
      yAxis: {
        title: {
            text: ''
        }
      },
      series: [
        { name: "Total Cases", data: trendLine.caseSeries, key: "totalCases" },
        { name: "Deaths", data: trendLine.deathSeries, key: "totalDeaths" },
        { name: "Recovered", data: trendLine.recoveredSeries, key: "totalRecovered" }
      ],
    }

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}/>
    );
  }
};

export default Trends;