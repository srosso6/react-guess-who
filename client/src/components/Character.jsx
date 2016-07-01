var React = require('react');

var Character = React.createClass({

  render: function() {

    return (
      <img src={this.props.img} className="img"/>
    );
  }

});

module.exports = Character;
