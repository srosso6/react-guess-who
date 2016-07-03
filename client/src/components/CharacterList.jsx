const React = require('react');
const Character = require("./Character");

const CharacterList = React.createClass({

  render: function() {

    // var characters = this.props.characters.map(function (character, index) {
    //   return(<Character key={index} img={character.img} onCardClick={this.props.onCardClick}/>)
    // }.bind(this));

    const characters = this.props.characters.map((character, index) =>
      <Character key={index} img={character.img} onCardClick={this.props.onCardClick}/>
    );

    return (
      <div className="characters">
        {characters}
      </div>
    );
  }

});

module.exports = CharacterList;
