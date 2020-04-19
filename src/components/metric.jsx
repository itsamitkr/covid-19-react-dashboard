import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Metric extends Component {
  static getFormattedMetric(metric) {
    return metric === "NaN" ? "N/A" : metric
  }

  render() {
    const { header, metric, type, icon, daily, dailyIcon } = this.props.data;
    return (
      <div className={ "card" }>
        <h4 className={ "bg-"+type + " card-header" }><FontAwesomeIcon icon={ icon } /> { header }</h4>
        <div className="card-body">
          <h2 className="card-title">{ Metric.getFormattedMetric(metric) }</h2>
          <h4 align="right" className={ "text-"+type }>
            <sub><FontAwesomeIcon icon={ dailyIcon } /> { Metric.getFormattedMetric(daily) }</sub>
          </h4>
        </div>
      </div>
    )
  }
};

export default Metric;

