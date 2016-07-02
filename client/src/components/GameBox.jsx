var React = require('react');
var data = require("../characters.js");
var CharacterList = require("./CharacterList.jsx");
var CharacteristicForm = require("./CharacteristicForm.jsx");
var _ = require("lodash");


var GameBox = React.createClass({

  getInitialState: function() {
    return {
      characters: data,
      characterToGuess: null,
      selectedChar: "Gender",
      selectedCharOpt: null
    };
  },

  componentDidMount: function () {
    var character = this.state.characters[Math.floor(Math.random() * this.state.characters.length)];
    this.setState({characterToGuess: character})
  },

  listCharacteristics: function () {
    return Object.keys(this.state.characters[0].chars)
  },

  setSelectedChar: function (charIndex) {
    var selectedChar = this.listCharacteristics()[charIndex]
    this.setState({selectedChar: selectedChar});
  },

  listCharOptions: function () {
    var charOptions = this.state.characters.map(function(character) {
      return character["chars"][this.state.selectedChar]
    }.bind(this))
    return _.uniq(charOptions);
  },

  setSelectedCharOpt: function (charOpt) {
    this.setState({selectedCharOpt: charOpt});
  },

  checkChar: function () {
    if(this.state.characterToGuess["chars"][this.state.selectedChar] === this.state.selectedCharOpt) {
      return "True";
    } else {
      return "False";
    }
  },

  render: function() {

    var checkCharResponse = null;
    if(this.state.selectedCharOpt) {
      checkCharResponse = this.checkChar();
    }

console.log(this.state.characterToGuess);
console.log("rendered");

    return (
      <div>
        <h1>Guess Who?</h1>
        <CharacterList characters={this.state.characters}/>
        <CharacteristicForm
          chars={this.listCharacteristics()} onSelectChar={this.setSelectedChar}
          charOpts={this.listCharOptions()}
          onSelectCharOpt={this.setSelectedCharOpt}
        />
      <h3>{checkCharResponse}</h3>
      </div>
    );
  }

});

module.exports = GameBox;
