import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx'
import Headlines from './components/Headlines.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      regions: [],
      source: []
    }
    this.selectSource.bind(this)
  }

  componentDidMount() {
    this.selectRegion();
  }

  selectRegion() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&key=${window.News_API}&source=reuters&limit=10`)
      .then(response => response.json())
      .then(data => this.setState({ source: data.results}));
  }


  selectSource(region) {
    console.log(`${region} was selected`);
  }

  render () {
    return (<div>
      <h1>AnonaNews</h1>
      <div>Fetch Headlines based on region or category</div>
      <Search getInfo={this.getInfo}/>
      {/* <SelectSource source = {this.state.source} onSelect={this.selectSource}/> */}
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));