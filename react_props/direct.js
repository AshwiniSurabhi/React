var React = require('react');
var ReactDOM = require('react-dom');
var propTypes = require('prop-types')
//any css we include is included in app when everything bundles
//require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.username}</h1>
        </div>
    )
  }
}


Badge.propTypes = {
	username : propTypes.string.isRequired
	//list : protoTypes.arrayOf(protoTypes.object)
	//list : protoTypes.arrayOf(protoTypes.shape({name: protoType.string.isRequired, friend: protoType.string.isRequired})
}


ReactDOM.render(
  <Badge 
    username='Aswini'/>,
  document.getElementById('app')
);
