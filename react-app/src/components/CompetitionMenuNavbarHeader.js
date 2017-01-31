var React = require('react');
var Navbar = require('react-bootstrap').Navbar;

function CompetitionMenuNavbarHeader() {
  return (
    <Navbar.Header>
	  <Navbar.Brand>
	    <a href="/competition">uResults</a>
	  </Navbar.Brand>
	  <Navbar.Toggle />
	</Navbar.Header>
  );
}

module.exports.Component = CompetitionMenuNavbarHeader;
