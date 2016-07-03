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

    var charOptions = null;
    console.log("here 1", charOptions);
    if(this.props.charOpts) {
      console.log("here 2", charOptions);
      var charOptions = this.props.charOpts.map((charOpt, index) =>
        <option key={index} value={charOpt}>{charOpt}</option>
      );
      console.log("here 3", charOptions);
    };

console.log("here 4", charOptions);
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
