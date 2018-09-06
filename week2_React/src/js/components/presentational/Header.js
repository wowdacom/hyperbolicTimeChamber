import React from 'react';

export class Search_bar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }
  
  render(){
    return (
      <div className="search-bar">
        <div>
          <i className="search-bar-icon fas fa-search" onClick={this.props.handleSearch}></i>
          <input className="myInput" type="text" type="text" placeholder={this.props.value} onBlur={this.props.onBlur} onChange={this.props.handleChange} onFocus={this.props.onFocus}/>
        </div> 
      </div>
    )
  }
}


export class Header extends React.Component {

  handleSearch (e) {

    this.setState({searchContent: e.target.value})   
  }

  handleFouse(){
    
    this.setState({value: ''});
  }

  handleFouseOut(){
    this.setState({value: 'Explore your own activities'});
  }

  handleChange(event) {

    this.setState({value: event.target.value});
  }

  constructor(props) {
    super(props);

    this.state = {
      searchContent: "",
      value: 'Explore your own activities'
    };

    this.handleSearch = this.handleSearch.bind(this)
    this.handleFouse = this.handleFouse.bind(this);
    this.handleFouseOut = this.handleFouseOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  

  render() {
    return (
        <div className="header container-fliud">
          <div className="row">
            <div id="logo" className="col-lg-3 col-md-5">Have Fun</div>
            <div className="col-lg-9 col-sm-7">
              <Search_bar name="search" handleSearch={this.handleSearch.bind(this)} value={this.state.value} onBlur={this.handleFouseOut} onChange={this.handleChange} onFocus={this.handleFouse} />
              <p>{this.state.searchContent}</p>
            </div>
          </div>       
        </div>
    );
  }
}