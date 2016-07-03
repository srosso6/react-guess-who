var React = require('react');
var Character = require("./Character");

var CharacterList = React.createClass({

  render: function() {

    var characters = this.props.characters.map(function (character, index) {
      return(<Character key={index} img={character.img} onCardClick={this.props.onCardClick}/>)
    }.bind(this));

    return (
      <div className="characters">
        {characters}
      </div>
    );
  }

});

module.exports = CharacterList;
