import React, { Component } from "react";
import ReactDOM from "react-dom";

class RootContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: "Hello World"
    };

  }

  render() {

    return (
      <div>
	  <h1>{this.state.comments}</h1>
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<RootContainer/>, wrapper) : false;
