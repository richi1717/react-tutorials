var React = require('react');
var ShoutBack = React.createFactory(require('./components/shoutback.jsx'));

ReactDOM.render(ShoutBack(), document.getElementById('container'));