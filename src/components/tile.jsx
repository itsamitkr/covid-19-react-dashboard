import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Metric from './metric'
const metrics = require('./mapData').getMetricsData();

class Tile extends Component {
  render() {
    return (
      <div className={"row"}>
        {metrics.map(function(object, i){
            return <div className={"col-3"}>
              <Metric data={object} key={i} />
              <br/>
              </div>;
         })}
      </div>
    )
  }
};

export default Tile;