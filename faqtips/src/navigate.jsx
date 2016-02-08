var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');
var ListItem = require('./list-item');
var FaqTips = require('./faq-tips');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators');

module.exports = React.createClass({
  handleClickNext: function () {
    console.log('next');
    this.setState({ open: !this.props.open });


  },
  handleClickPrevious: function () {
    console.log('previous');
    this.setState({ open: !this.state.open });
  },
  getInitialState: function () {
    return { open: false }
  },
  handleItemClick: function (item) {
    this.setState({
      open: false,
      itemTitle: item
    })
  },
  render: function () {
    var list = this.props.items.map(function (item, index) {
      return <ListItem item={item}
        whenItemClicked={this.handleItemClick}
        key={index}
        className={this.state.itemTitle === item ? "active" : ""}
      />
    }.bind(this));

    // return <div className="dropdown">
    //   <Button whenClicked={this.handleClickPrevious}
    //     className="btn-default"
    //     title={this.props.previous}
    //
    //   />
    //   <Button whenClicked={this.handleClickNext}
    //     className="btn-default"
    //     title={this.props.next}
    //
    //   />
    //   <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
    //     <FaqTips />
    //   </ul>

    // </div>
    return (
      <Carousel decorators={Decorators}>
        <p>hey everybody</p>
        <div>SO</div>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
    )
  }
});

// module.exports = React.createClass({
//   render: function() {
    // return (
    //   <Carousel>
    //     <img
    //       src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
    //     <img
    //       src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
    //     <img
    //       src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
    //     <img
    //       src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
    //     <img
    //       src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
    //     <img
    //       src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
    //   </Carousel>
    // )
//   }
// });

// ReactDOM.render(<LiveExample/>, document.getElementById('container'));
