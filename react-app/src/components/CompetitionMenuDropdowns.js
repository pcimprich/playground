var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

class CompetitionMenuDropdowns extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {categories: [{name: "", id: "", competitions: []}]};
  	}

  	componentDidMount() {
		var that = this;
	
		fetch('/api/categories?withCompetitions=1')
			.then(function(response) {
				return response.json();
	  		}).then(function(json) {
	    		//console.log('parsed json: ', json)
				that.setState({categories: json});
	  		}).catch(function(ex) {
	    		console.log('parsing failed: ', ex)
	  		});
		}

  	  render() {
	  	const categories = this.state.categories;
	  
	  	const dropdowns = (
	    	<Nav>
		  		{categories.map((cat) => 
	        		<NavDropdown key={cat.id} title={cat.name} id={'category-dropdown' + cat.id}>
			  	  		{cat.competitions.map((comp) =>
			    			<MenuItem eventKey={'C' + comp.id} key={comp.id}>{comp.name}</MenuItem>
			  	  		)}
	        		</NavDropdown>
		  		)}
	    	</Nav>
		);
	 
	 	return dropdowns;
  	}
}

module.exports.Component = CompetitionMenuDropdowns;
