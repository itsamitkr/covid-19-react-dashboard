import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Flag extends Component {
  render() {
    return (
      <LazyLoadImage
        alt={ this.props.alt }
        height={ 25 }
        src={ this.props.src }
        width={ 40 }
      />)
  }
};

export default Flag;