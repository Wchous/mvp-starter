import React, { Component } from 'react'
import axios from 'axios'

const {API_KEY} = window.NEWS_API
const API_URL = 'https://newsapi.org/v2/top-headlines?country=us'



class Search extends React.Component {  
  constructor(props) {
    super(props);
      this.state = {
        query: '',
        results: []
    }
  }

  getInfo() {
    axios.get(`${API_URL}&category=${this.state.query}&totalResults=10&api_key=${API_KEY}`)
      .then(({ data }) => {
        this.setState({
          results: data.data                            
        })
      })
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Search

// getInfo = () => {
//   app.get(`${'https://newsapi.org/v2/top-headlines?country=us'}&api_key=${'04c96ec32bbace5646ad77d7c171ae4a'}&category=${this.state.query}&limit=10`)
//     .then(({ data }) => {
//       this.setState({
//         results: data.data
//       })
//     })
// }

// export default Search


// var Search = (props) => (
//   <div className="search-bar form-inline">
//   <form className ="search-form" onSubmit = {(event) => { event.preventDefault(); props.buildFetch();}}>
//     <input className="form-control" type="text" />
//     <submit className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </submit>
//     </form>
//   </div> 
// );


// window.Search = Search;
