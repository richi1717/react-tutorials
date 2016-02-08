var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
  render: function () {
    return <div className="col-sm-6 col-md-4 col-lg-6">
      <div className="thumbnail">
        <div className="caption">
          <img src={this.props.imageUrl} />
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <p>
            <Badge title={this.props.title} number={this.props.number} />
          </p>
        </div>
      </div>
    </div>
  }
});
