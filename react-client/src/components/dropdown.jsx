import React from 'react';

let Dropdown = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false
    };
  },
  
  select: function(item) {
    this.props.selected = item;
  },
        
  show: function() {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide);
  },
        
  hide: function() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
  },
      
  render: function() {
    return <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
      <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
        <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
        <i className="fa fa-angle-down"></i>
      </div>
      <div className="dropdown-list">
        <div>
          {this.renderListItems()}
        </div>
      </div>
    </div>;
  },

renderListItems: function() {
  let items = [];
  for (let i = 0; i < this.props.list.length; i++) {
    let item = this.props.list[i];
    items.push(<div onClick={this.select.bind(null, item)}>
      <span>{item.title}</span>
    </div>);
    }
    return items;
  }
});


let categories = [
  {
      id: 1,
      title: 'Business',
      selected: false,
      key:'location'
  },
  {
    id: 2, 
    title: 'North America',
    selected: false,
    key:'location'
  },
  {
    id: 3, 
    title: 'South America',
    selected: false,
    key:'location'
  },
  {
    id: 4,
    title: 'Europe',
    selected: false,
    key:'location'
  },
  {
    id: 5,
    title: 'Middle East',
    selected: false,
    key:'location'
  },
  {
    id: 6,
    title: 'Africa',
    selected: false,
    key:'location'
  },
  {
    id: 7, 
    title: 'Asia',
    selected: false,
    key:'location'
  }
],