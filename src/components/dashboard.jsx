import React, { Component } from "react";
import Table from './table'
import WorldMap from './worldMap'
import Trends from './trends'
import Tile from './tile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const data = require("../static/covid.json");

class Dashboard extends Component {
  render() {
    return (
      <div className={"container-fluid"}>
        <div className={"row viz-padding"}>
          <div className={"col-12"}>
            <h1 className="h1"><FontAwesomeIcon icon={ "virus" } /> COVID-19 Dashboard</h1>
          </div>
          <div className={"col-12"}>
            <Tile />
          </div>
          <div className={"col-7"}>
            <WorldMap />
          </div>
          <div className={"col-5"}>
            <Trends />
          </div>
          <div className={"col-12"}>
          <br/>
          </div>
          <div className={"col-12"}>
            <Table data={data}/>
          </div>
        </div>

      </div>
    )
  }
};

export default Dashboard;