import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Metric extends Component {
  render() {
    const { header, metric, type, icon } = this.props.data;
    return (
      <div class={ "card" }>
        <h4 class={ type + " card-header" }><FontAwesomeIcon icon={ icon } /> { header }</h4>
        <div class="card-body">
          <h2 class="card-title">{ metric }</h2>
        </div>
      </div>
    )
  }
};

export default Metric;

