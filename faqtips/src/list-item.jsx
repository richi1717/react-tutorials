var React = require('react');


module.exports = React.createClass({
  handleClick: function () {
    this.props.whenItemClicked(this.props.item);
  },
  render: function () {
    return <FaqTips />
  }
})
