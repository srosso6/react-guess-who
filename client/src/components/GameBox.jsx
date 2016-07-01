var React = require('react');
var CharacterList = require("./CharacterList.jsx");
var data = require("../characters.js");


var GameBox = React.createClass({

  getInitialState: function() {
    return {
      characters: data
    };
  },

  render: function() {

    return (
      <div>
        <h1>Guess Who?</h1>
        <CharacterList characters={this.state.characters}/>
      </div>
    );
  }

});

module.exports = GameBox;
