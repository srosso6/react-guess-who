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
        <select
          onChange={this.handleCharacterSelection}>
          {characters}
        </select>
      </div>
    );
  }

});

module.exports = AnswerForm;
