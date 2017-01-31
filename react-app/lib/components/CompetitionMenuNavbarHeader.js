var React = require('react');
var Navbar = require('react-bootstrap').Navbar;

function CompetitionMenuNavbarHeader() {
		return React.createElement(
				Navbar.Header,
				null,
				React.createElement(
						Navbar.Brand,
						null,
						React.createElement(
								'a',
								{ href: '/competition' },
								'uResults'
						)
				),
				React.createElement(Navbar.Toggle, null)
		);
}

module.exports.Component = CompetitionMenuNavbarHeader;