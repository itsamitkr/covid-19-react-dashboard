import React, { Component } from "react";
import Table from './table'
import WorldMap from './worldMap'
import Trends from './trends'
import Tile from './tile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const data = require("../static/covid.json");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      metric: {},
      trend: [],
    }
  }
  componentDidMount() {
    Promise.all([
      fetch("https://corona.lmao.ninja/countries"),
      fetch("https://corona.lmao.ninja/all"),
      fetch("https://corona.lmao.ninja/historical"),
    ]).then(([res1, res2, res3]) => {
       return Promise.all([res1.json(), res2.json(), res3.json()])
    })
    .then(([res1, res2, res3]) => {
      this.setState({
        table: res1,
        metric: res2,
        trend: res3
      })
    });
  }

  render() {
    const { table, metric, trend } = this.state;
    return (
      <div className={"container-fluid"}>
        <div className={"row viz-padding"}>
          <div className={"col-12"}>
            <h1 className="h1"><FontAwesomeIcon icon={ "virus" } /> COVID-19 Dashboard</h1>
          </div>
          <div className={ "col-12" }>
            <Tile data={ metric }/>
          </div>
          <div className={ "col-6" }>
            <WorldMap />
          </div>
          <div className={ "col-6" }>
            <Trends />
          </div>
          <div className={ "col-12" }>
          <br />
          </div>
          <div className={ "col-12" }>
            <Table data={ table } />
          </div>
        </div>

      </div>
    )
  }
};

export default Dashboard;