var React = require('react');

var CharacteristicForm = React.createClass({

  // getInitialState: function () {
  //   return { selectedIndex: null };
  // },

  handleCharSelection: function (event) {
    event.preventDefault();
    var newIndex = event.target.value;
    // this.setState({selectedIndex: newIndex});
    this.props.onSelectChar(newIndex);
  },

  handleCharOptSelection: function (event) {
    event.preventDefault();
    var charOpt = event.target.value;
    this.props.onSelectCharOpt(charOpt);
  },

  render: function() {

    var characteristics = this.props.chars.map(function(char, index) {
        return(
          <option key={index} value={index}>{char}</option>
        )
    });

    var charOptions = null;
    if(this.props.charOpts) {
      var charOptions = this.props.charOpts.map(function (charOpt, index) {
        return(
            <option key={index} value={charOpt}>{charOpt}</option>
        )
      });
    }

    return (
      <div>
        <select
          onChange={this.handleCharSelection}>
          {characteristics}
        </select>
        <select
          onChange={this.handleCharOptSelection}>
          <option key={-1} value="default">--Choose--</option>
          {charOptions}
        </select>
      </div>
    );
  }

});

module.exports = CharacteristicForm;

// value={this.state.selectedIndex}
