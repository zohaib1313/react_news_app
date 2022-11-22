import React, { Component } from "react";
import loading from "./loading.gif";

class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-6">
        <img height="50px" src={loading} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
