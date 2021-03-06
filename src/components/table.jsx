import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter, numberFilter } from "react-bootstrap-table2-filter";
// import paginationFactory from 'react-bootstrap-table2-paginator';
import Flag from './flag';


const columns = [{
  dataField: "country",
  text: "Country",
  sort: true,
  filter: textFilter(),
  formatter: imageFormatter
},{
  dataField: "todayCases",
  text: "Today's Cases",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
},{
  dataField: "cases",
  text: "Total Cases",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
},{
  dataField: "active",
  text: "Active Cases",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
},{
  dataField: "recovered",
  text: "Recovered Cases",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
},{
  dataField: "critical",
  text: "Critical Cases",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
},{
  dataField: "deaths",
  text: "Deaths Cases",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
},{
  dataField: "casesPerOneMillion",
  text: "Cases/ MM",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
},{
  dataField: "deathsPerOneMillion",
  text: "Deaths/ MM",
  sort: true,
  filter: numberFilter(),
  formatter: numberFormatter
}];

const defaultSorted = [{
  dataField: "cases",
  order: "desc"
}];

function numberFormatter(cell) {
  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 12 }).format(cell);
}

function imageFormatter(cell, row){
  return (
    <div>
      <Flag alt={ row.country } src={ row.countryInfo.flag } />
      &nbsp;&nbsp;
      <strong>{ cell }</strong>
    </div>);
}


class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={ "card col-12" }>
        <br/>
        <BootstrapTable
          keyField={ "country" }
          columns={ columns }
          data={ data }
          defaultSorted = { defaultSorted }
          filter={ filterFactory() }
          striped
          hover
          wrapperClasses={ "table-responsive" }
//           pagination={ paginationFactory(options) }
          condensed/>
        <br/>
      </div>
    )
  }
};
export default Table;