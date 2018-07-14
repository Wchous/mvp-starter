class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: window.FILL_MEEEEE_INNNNNNNNN,
      selected: window.FILL_ME_INNNNNNNNN
    };
    this.select = this.select.bind(this);
    this.buildFetch = _.debounce(this.buildFetch, 500);
    this.buildFetch = this.buildFetch.bind(this);

    const results = searchCategories('middle east');
    results.then()
  }
  select(target) {
    this.setState({selected: target});
  }

  buildFetch(){
    
    const query = $(".form-control").val();
    $(".form-control").val('');
    const results = searchCategories(query);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/*search went here*/}
            <Search buildFetch = {this.buildFetch}/> 
          </div>
        </nav>
      </div>
    );
  }
}

window.App = App;

window.searchCategories = function(query) {
  
  const url = new URL('');
  const params = {maxResults: '10',
    part: 'description',
    q: query,
    type: 'json',
    videoEmbeddable: true,
    key: window.News_API
  };

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key] ));

  return fetch(url).then((result)=>result.json());

};