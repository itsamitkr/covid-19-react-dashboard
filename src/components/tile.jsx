import React, { Component } from "react";
import Metric from './metric'

class Tile extends Component {

  render() {
    const tiles = [
      {
        "header": "Confirmed",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.cases),
        "type": "info",
        "icon": "head-side-virus",
        "dailyIcon": "arrow-alt-circle-up",
        "daily": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.todayCases),
      },
      {
        "header": "Recovered",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.recovered),
        "type": "success",
        "icon": "head-side-mask",
        "dailyIcon": "ban",
        "daily": "",
      },
      {
        "header": "Active",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.active),
        "type": "warning",
        "icon": "head-side-cough",
        "dailyIcon": "procedures",
        "daily": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.critical),
      },
      {
        "header": "Death",
        "metric": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.deaths),
        "type": "danger",
        "icon": "head-side-cough-slash",
        "dailyIcon": "arrow-alt-circle-up",
        "daily": new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(this.props.data.todayDeaths),
      }]

    return (
      <div className={"row"}>
        { tiles.map(function(object, i){
          return <div key={i} className={"col-sm-12 col-md-6 col-lg-3"}>
            <Metric data={object} />
            <br/>
            </div>;
         }) }
      </div>
    )
  }
};

export default Tile;