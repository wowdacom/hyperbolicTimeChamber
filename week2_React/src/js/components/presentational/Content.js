import React from 'react';

export class Filter extends React.Component {

    handleChange(){

        let someProperty = {'categories': [...this.state.categories]}
        someProperty.categories[1].form = ''
        someProperty.categories[1].to = ''

        this.setState({someProperty})

    }

    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    'title': "Loaction",
                    'content': ['Taiwan', 'Japan', 'China', 'U.S.']
                },
                {
                    'title': "Date",
                    'from': '2018/5/24',
                    'to': '2018/6/1'
                },
                {
                    'title': "Categories"
                }
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.listItems = this.state.categories.map((item, index) => {
            
            if ( item.title === 'Loaction') {
                return (
                    <li key={index.toString()}>
                        <div className="title">{item.title}</div>
                        
                        <div className="content location">
                        <select>
                            <option>American</option>
                            <option value="selected">Taiwan</option>
                            <option>Japen</option>
                            <option>U.K.</option>
                        </select>
                        </div>
                    </li>
                )
            } else if (item.title === 'Date') {
                return (
                    <li key={index.toString()}>
                        <div className="title">{item.title}</div>                       
                        <div className="content date">
                            <form>
                                <span>from </span><input className="date-from" type="text" placeholder={item.from} onClick={this.handleChange}/>
                                <br />
                                <span>to </span><input className="date-to" type="text" placeholder={item.to} />
                            </form>
                        </div>
                    </li>
                )
            } else if (item.title === 'Categories') {
                return (
                    <li key={index.toString()}>
                        <div className="title">{item.title}</div>
                        
                        <div className="content categories">
                            <ul>
                                <li><div className="icon"></div>All</li>
                                <li><div className="icon"></div>Entertainment</li>
                                <li><div className="icon"></div>Food</li>
                                <li><div className="icon"></div>Learning</li>
                                <li><div className="icon"></div>Outdoors</li>
                            </ul>
                        </div>
                    </li>
                )
    
            } else {
                return ''
            }
        }

        
        );

        
      }

    render(){
        return (
            <div className="filter">
                <ul>{this.listItems}</ul>
            </div>
        )
    }

}

class NumberList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }

    get list(){
        let hello
        if (this.props.data.length !== 0){
            console.log(this.props.data)
            hello = this.props.data.records.map((item, index)=>{
                let style = { 
                    backgroundImage: `url(${item.Picture1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '400px'
                }
                return (
                    <li key={index.toString()}>
                        <div>
                            <div className="postCard">
                                <div className="postImg" style={style}>
                                </div>
                                <div className="postContent">
                                    <h3 className="postTitle"> {item.Picdescribe1}</h3>
                                    <p className="postText"> {item.Description}</p>
                                    <div className="postInfo">
                                        <span className="postOrganizer">{item.Name}</span>
                                        <ul className="postTag">
                                            <li></li>
                                        </ul>
                                    </div>
                                    <ul>
                                        <li className="postAddress">{item.Zone}</li>
                                        <li className="postDate">{item.Opentime}</li>
                                    </ul>
                                </div>
                            </div>   
                        </div>
                    </li>
                )
            })       
        }
        return hello
        //非同步問題
    }

    render (){
        return <ul>{this.list}</ul>
    }
}

export class Billboard extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          posts: {},
          result: 15,
          listItems: [],
          tags: ['Taiwan', 'Koahsiung', 'Entertainment'],
          filterResult: ['Taiwan', 'Koahsiung', 'Entertainment']
      };

    }
    
    render(){

      return (
        <div className="billboard">
            <div className="show">
                Showing <span>{this.state.result}</span> results by…
            </div>
            <ul>{this.listItems}</ul>
            <div className="billboard-content">
                <NumberList data={this.props.data} />
            </div>
        </div>
      )
    }
  }


export class Content extends React.Component {


    componentDidMount() {

    }

    constructor(props) {
        super(props);
    
        this.state = {
          comments: [],
        };
    
      }
    
  render() {
      
    return (
        <div className="content container-fliud">
            <div className="row">
                <div className="col-lg-3 col-md-5">
                    <Filter />
                </div>
                <div className="col-lg-9 col-sm-7">
                    <Billboard data={this.props.data}/>            
                </div>
            </div>
        </div>
    );
  }
}