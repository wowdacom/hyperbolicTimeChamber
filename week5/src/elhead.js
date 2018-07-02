import React from 'react';

var dataNav = ['Hello', 'Component', 'World']

var jsxNav = dataNav.map((item, index)=>(
  <li key="index">{item}</li>
))

export default class elhead extends
React.Component {
  render(){
    return (
      <div className="DottedBox">
        <p>Hello style</p>
        Other Way Write Component {this.props.brand}!
        <div className="DottedBox_content">
          HEADDDDDDDDD
        </div>
      </div>
    )
  }
}