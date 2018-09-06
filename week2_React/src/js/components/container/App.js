import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Header } from "../presentational/Header";
import { Content } from "../presentational/Content";

class RootContainer extends Component {

  componentDidMount() {
    fetch("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            comments: result['result']
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      )  
  }

  handleClick () {

    if(this.state.myButton.active){
      this.setState({myButton: {'active': false,'class': 'myButton text'}})

    }else{
      this.setState({myButton: {'active': true,'class': 'myButton active'}})
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      myButton: {
        active: false,
        class: 'text' 
      }
    };

    this.handleClick = this.handleClick.bind(this)
  }

  render() {

    return (
      <div>
        <Header />
        <Content data={this.state.comments} />
      </div>
    );
  }
}

export default RootContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<RootContainer/>, wrapper) : false;
