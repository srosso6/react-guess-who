var React = require('react');

var Character = React.createClass({

  render: function() {

    return (
      <div className="container">
        <div className="img">
          <img src={this.props.img} className="front"/>
          <img src="img/card.jpeg" className="back" />
        </div>
      </div>
    );
  }

});

module.exports = Character;
