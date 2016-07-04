const React = require('react');

const CharacteristicForm = React.createClass({

  handleCharSelection: function (event) {
    event.preventDefault();
    let newIndex = event.target.value;
    this.props.onSelectChar(newIndex);
    event.target.nextSibling.selectedIndex = 0;
  },

  handleCharOptSelection: function (event) {
    event.preventDefault();
    let charOpt = event.target.value;
    this.props.onSelectCharOpt(charOpt);
  },

  render: function() {

    const characteristics = this.props.chars.map((char, index) =>
      <option key={index} value={index}>{char}</option>
    );

    const charOptions = this.props.charOpts.map((charOpt, index) => {
      return <option key={index} value={charOpt}>{charOpt}</option>
      }
    );

    return (
      <div>
        <label>Ask a question:</label>
        <select
          onChange={this.handleCharSelection}>
          {characteristics}
        </select>
        <select
          onChange={this.handleCharOptSelection}>
          <option key={-1} value="default">--Select--</option>
          {charOptions}
        </select>
      </div>
    );
  }

});

module.exports = CharacteristicForm;
