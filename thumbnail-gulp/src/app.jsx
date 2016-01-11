var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    imageUrl: 'http://formatjs.io/img/react.svg',
    description: 'React is awesome, fast, and dynamic!',
    header: 'Learn React'
  },
  {
    title: 'See Tutorials',
    number: 25,
    imageUrl: 'http://brunch.io/images/others/gulp.png',
    description: 'Gulp will speed up your development workflow',
    header: 'Learn Gulp'
  }]
};

// Ask react to render this class
var element = React.createElement(ThumbnailList, options);

// When we ask react to render this class, we will tell
// it where to place the rendered element in the dom
ReactDOM.render(element, document.querySelector('.container'))
