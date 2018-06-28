import React from 'react';
import './DottedBox.scss';

// export default React.createClass({
//   render: function() {
//     return (
//       <div className="greeting">
//         Hello {this.props.name}!
//       </div>
//     );
//   },
// });

const divStyle = {
  color: 'green'
};


export default class greeting extends
React.Component {
  render(){
    return (
      <div className="DottedBox">
        <p>Hello style</p>
        Other Way Write Component {this.props.brand}!
        <div className="DottedBox_content">
          This is the content of DottedBox
        </div>
      </div>
    )
  }
}