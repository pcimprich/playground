var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var CompetitionMenuDropdowns = require('./CompetitionMenuDropdowns').Component;

const CompetitionMenuNavbarCollapse = (props) => {
  return (
	<Navbar.Collapse>
	  <CompetitionMenuDropdowns />
	  <Nav pullRight>
	    <NavItem eventKey="S" href="#"><i className="fa fa-bars" aria-hidden="true"></i></NavItem>
	  </Nav>
	  <Navbar.Text pullRight>Anonymous</Navbar.Text>
	</Navbar.Collapse>
  );
}

module.exports.Component = CompetitionMenuNavbarCollapse;
