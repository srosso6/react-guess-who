var React = require('react');

var Character = React.createClass({

  handleClick: function (event) {
    this.props.onCardClick(event.target);
  },

  render: function() {

    return (
      <div
        className="flip-container"
        onClick={this.handleClick}
      >
        <div className="flipper" >
          <img src={this.props.img} className="front"/>
          <img src="img/card.jpeg" className="back" />
        </div>
      </div>
    );
  }

});

module.exports = Character;
