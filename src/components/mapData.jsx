const covid = require("../static/covid.json");
const historicalData = require("../static/historical.json");

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
