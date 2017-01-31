var React = require('react');
var ReactDOM = require('react-dom');

class VersionsContainer extends React.Component {
  constructor() {
    super();
    this.state = {versions: {name: "", version: "", packages: []}};
  }

  componentDidMount() {
	var that = this;
	
	fetch('/api/versions')
		.then(function(response) {
			return response.json();
	  	})
		.then(function(json) {
	    	//console.log('parsed json: ', json)
			that.setState({versions: json});
	  	})
		.catch(function(ex) {
	    	console.log('parsing failed: ', ex)
	  	});
  }

  render() {
    return <Versions versions={this.state.versions} />;
  }
}

const versionsContainerElement = <VersionsContainer />;

ReactDOM.render(
  versionsContainerElement,
  document.getElementById('root')
);
