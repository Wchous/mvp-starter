import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import dropdown from './components/dropdown.jsx';


class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  // componentDidMount() {
  //   let topics = [];
  //   $.ajax({
  //     url: '/headlines', 
  //     success: (data) => {
  //       this.setState({
  //         headlines: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>AnonaNews</h1>
      <dropdown category={this.state_____`FILLL INNNNNN WITH STUFFFFFFF`}/>
    </div>)
  }
}

ReactDOM.render(<Categories />, document.getElementById('category'));