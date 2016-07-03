var React = require('react');
var data = require("../characters.js");
var CharacterList = require("./CharacterList.jsx");
var CharacteristicForm = require("./CharacteristicForm.jsx");
var AnswerForm = require("./AnswerForm.jsx");
var _ = require("lodash");


var GameBox = React.createClass({

  getInitialState: function() {
    return {
      characters: data,
      characterToGuess: null,
      selectedChar: "Gender",
      selectedCharOpt: null,
      guess: null
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
    this.setState({selectedCharOpt: null});

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
      return "Answer: True";
    } else {
      return "Answer: False";
    }
  },

  setCharacterGuess: function (characterName) {
    this.setState({guess: characterName})
  },

  checkCharacter: function () {
    if(this.state.characterToGuess.name === this.state.guess ) {
      return (
        "Yay, that's me!"
      )
    } else {
      return (
        "No, I am " + this.state.characterToGuess.name +"!"
      )
    }
  },

  flip: function (div) {
    div.parentNode.classList.toggle("flipped");
  },

  // The Element.classList is a read-only property which returns a live DOMTokenList collection of the class attributes of the element.

  render: function() {

    var checkCharResponse = null;
    if(this.state.selectedCharOpt) {
      checkCharResponse = this.checkChar();
    }

    var checkCharacterResponse = null;
    if(this.state.guess) {
      checkCharacterResponse = this.checkCharacter();
    }

    console.log(this.state.characterToGuess);
    console.log("rendered");

    return (
      <div>
        <CharacterList
          characters={this.state.characters}
          onCardClick={this.flip}
          />
        <h1>Who Am I?</h1>
        <div className="qanda">
          <CharacteristicForm
            chars={this.listCharacteristics()} onSelectChar={this.setSelectedChar}
            charOpts={this.listCharOptions()}
            onSelectCharOpt={this.setSelectedCharOpt}
          />
          <h3>{checkCharResponse}</h3>
          <AnswerForm
            characters={this.state.characters}
            onSelectCharacter={this.setCharacterGuess}
          />
          <h3>{checkCharacterResponse}</h3>
        </div>

      </div>
    );
  }

});

module.exports = GameBox;
