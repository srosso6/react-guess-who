const React = require('react');

const AnswerForm = React.createClass({

  handleCharacterSelection: function (event) {
    event.preventDefault();
    let characterName = event.target.value;
    this.props.onSelectCharacter(characterName);
  },

  render: function() {

    const characters = this.props.characters.map((character, index) =>
      <option key={index} value={character.name}>{character.name}</option>
    );

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
