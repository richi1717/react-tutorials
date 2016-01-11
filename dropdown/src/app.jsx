var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [ // List of items to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// Ask react to render this class
var element = React.createElement(Dropdown, options);

// When we ask react to render this class, we will tell
// it where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.container'))
