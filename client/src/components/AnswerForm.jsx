var React = require('react');

var AnswerForm = React.createClass({

  handleCharacterSelection: function (event) {
    event.preventDefault();
    var characterName = event.target.value;
    this.props.onSelectCharacter(characterName);
  },

  render: function() {

    var characters = this.props.characters.map(function (character, index) {
      return(
        <option key={index} value={character.name}>{character.name}</option>
      )
    });

    return (
      <div>
        <label>Guess a character:</label>
        <select
          onChange={this.handleCharacterSelection}>
          <option key={-1} value="default">--Select--</option>
          {characters}
        </select>
      </div>
    );
  }

});

module.exports = AnswerForm;
