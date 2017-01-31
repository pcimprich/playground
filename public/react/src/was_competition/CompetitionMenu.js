var React = require('react');
var ReactDOM = require('react-dom');

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

class CompetitionMenu extends React.Component {
  constructor(props) {
    super(props);
	this.onSelect = this.onSelect.bind(this);
	this.state = {navSelected: null};
  }
  
  onSelect(eventKey) {
	  this.setState({navSelected: eventKey});
	  
	  // selected competition object is passed up
	  if (eventKey.substr(0,1) == 'C') {
	  	var that = this;
		
	  	fetch('/api/competitions/' + eventKey.substr(1,1))
			.then(function(response) {
				return response.json();
  			}).then(function(json) {
    			//console.log('parsed json: ', json)
				that.props.onCompetitionChange(json);
  			}).catch(function(ex) {
    			console.log('parsing failed: ', ex)
  			});
	  }
  }

  render() {
	  const navbar = (
	    <Navbar collapseOnSelect onSelect={this.onSelect}>
	      <Navbar.Header>
	        <Navbar.Brand>
	          <a href="/competition">uResults</a>
	        </Navbar.Brand>
	        <Navbar.Toggle />
	      </Navbar.Header>
	      <Navbar.Collapse>
		  	<CompetitionMenuDropdowns competition={this.props.competition} onCompetitionChange={this.props.onCompetitionChange} />
	        <Nav pullRight>
	          <NavItem eventKey="S" href="#"><i className="fa fa-bars" aria-hidden="true"></i></NavItem>
	        </Nav>
			<Navbar.Text pullRight>Anonymous</Navbar.Text>
	      </Navbar.Collapse>
	    </Navbar>
	  );
	  
    return navbar;
  }
}
