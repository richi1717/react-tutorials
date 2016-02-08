var React = require('react');

module.exports = [{
  component: React.createClass({
    render() {
      return (
        <button
          style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
          onClick={this.props.nextSlide}>Yay</button>
      )
    },
    getButtonStyles(disabled) {
      return {
        border: 0,
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: 'pointer'
      }
    }
  }),
  position: 'CenterRight'
}];
