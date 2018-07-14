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
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.req.body}source=abc-news,al-jazeera-english,bbc-news,breitbart-news,cnn,financial-times,fox-news,msnbc,reuters,rt,the-new-york-times,the-wall-street-journal,the-washington-post,the-washington-times&key=${window.News_API}&limit=10`)
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