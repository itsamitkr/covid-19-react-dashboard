import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";

const map = require('@highcharts/map-collection/custom/world.geo.json');

HighchartsMap(Highcharts);

class WorldMap extends Component {

  static getMapData(items) {
    let mapList = [];
    for (let index in items) {
      if (items[index].country !== "world") {
        const data = {
          "code3": items[index].countryInfo.iso3,
          "z": items[index].cases,
          "iso2": items[index].countryInfo.iso2
        }
        mapList.push(data)
      }
    }
    return mapList;
  };

  render() {
    let options = {
      chart: {
        map: map
      },
      title: {
        text: ""
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom"
        }
      },
      series: [
        {
          name: "Countries",
          color: "#e7d4cf",
          enableMouseTracking: false
        },
        {
          type: "mapbubble",
          name: "COVID-19",
          joinBy: ["iso-a3", "code3"],
          data: WorldMap.getMapData(this.props.data),
          minSize: 4,
          maxSize: "12%",
          tooltip: {
            pointFormat: "{point.properties.hc-a2}: {point.z} thousands"
          }
        }
      ]
    };

    return (
        <div className={"card col-12"}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            constructorType={"mapChart"}
          />
        </div>
    );
  }
}
export default WorldMap;