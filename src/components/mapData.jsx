const covid = require("../static/covid.json");
const historicalData = require("../static/historical.json");

export function getMapData() {
  let mapList = [];
  for (let index in covid) {
    if(index > 0){
      const data = {
        "code3": covid[index].countryInfo.iso3,
        "z": covid[index].cases,
        "iso2": covid[index].countryInfo.iso2
      }
      mapList.push(data)
    }
  }
  return mapList;
};

export function getMetricsData() {
  const worldMetric = covid[0];
  const metrics = [
  {
    "header": "Total Cases",
    "metric":  numberFormatter(worldMetric.cases),
    "type": "bg-info",
    "icon": "head-side-virus"
  },
  {
    "header": "Total Recovered",
    "metric":  numberFormatter(worldMetric.recovered),
    "type": "bg-success",
    "icon": "head-side-mask"
  },
  {
    "header": "Total Active",
    "metric":  numberFormatter(worldMetric.active),
    "type": "bg-warning",
    "icon": "head-side-cough"
  },
  {
    "header": "Total Death",
    "metric": numberFormatter(worldMetric.deaths),
    "type": "bg-danger",
    "icon": "head-side-cough-slash"
  }]

  return metrics;
};

function numberFormatter(intValue) {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(intValue);
}

export function getHistoricalData() {
  const timelineKeys = Object.keys(historicalData[0].timeline.cases);

  let trendLine = {
    "categories": timelineKeys,
    "caseSeries": [],
    "deathSeries": [],
    "deathSeries": [],
    "recoveredSeries": []
  };

  timelineKeys.map(function(key, i) {
     let cases = 0;
     let deaths = 0;
     let recovered = 0;
     historicalData.map(function(object, i){
        cases = cases + object.timeline.cases[key];
        deaths = deaths + object.timeline.deaths[key];
        recovered = recovered + object.timeline.recovered[key];
     });
     trendLine.caseSeries.push(cases);
     trendLine.deathSeries.push(deaths);
     trendLine.recoveredSeries.push(recovered);
  });
  return trendLine;
}