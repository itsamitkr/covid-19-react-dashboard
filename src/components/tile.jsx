import React, { Component } from "react";
import Metric from './metric'

class Tile extends Component {

  render() {
    const tiles = [
      {
        "header": "Total Cases",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.cases),
        "type": "bg-info",
        "icon": "head-side-virus"
      },
      {
        "header": "Total Recovered",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.recovered),
        "type": "bg-success",
        "icon": "head-side-mask"
      },
      {
        "header": "Total Active",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.active),
        "type": "bg-warning",
        "icon": "head-side-cough"
      },
      {
        "header": "Total Death",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.deaths),
        "type": "bg-danger",
        "icon": "head-side-cough-slash"
      }]

    return (
      <div className={"row"}>
        { tiles.map(function(object, i){
          return <div className={"col-sm-12 col-md-6 col-lg-3"}>
            <Metric data={object} key={i} />
            <br/>
            </div>;
         }) }
      </div>
    )
  }
};

export default Tile;