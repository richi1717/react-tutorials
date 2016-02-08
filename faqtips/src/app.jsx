var React = require('react');
var ReactDOM = require('react-dom');
var Navigate = require('./navigate');

var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the navigate
  items: [ // List of items to show in the navigate
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ],
  previous: 'Previous',
  next: 'Next'
};

// Ask react to render this class
var element = React.createElement(Navigate, options);

// When we ask react to render this class, we will tell
// it where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.container'))
