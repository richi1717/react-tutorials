var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function () {
    return {
      topics: []
    }
  },
  componentWillMount: function () {
    Actions.getTopics();
  },
  render: function () {
    return <div className="list-group">
      Topic List
      {this.renderTopics()}
    </div>
  },
  renderTopics: function () {
    return this.state.topics.map(function (topic, idx) {
      return <li key={idx}>
          {topic.name}
          <ul>
            <li>
              {topic.description}
            </li>
          </ul>
        </li>

    });
  },
  onChange: function (e, topics) {
    this.setState({topics: topics});
  }
});
