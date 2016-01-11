var React = require('react');
var ShoutBack = React.createClass({
  handleSubmit: function () {
    alert(this.refs.shout.value.trim());
  },
  render: function () {
    return (
      <div>
        <h3>Say Something</h3>
        <input type="text" ref="shout" />
        <button type="submit">Submit</button>
      </div>
    )
  }
});

module.exports = ShoutBack;