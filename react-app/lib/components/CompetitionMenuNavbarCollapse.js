var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var CompetitionMenuDropdowns = require('./CompetitionMenuDropdowns').Component;

const CompetitionMenuNavbarCollapse = props => {
		return React.createElement(
				Navbar.Collapse,
				null,
				React.createElement(CompetitionMenuDropdowns, null),
				React.createElement(
						Nav,
						{ pullRight: true },
						React.createElement(
								NavItem,
								{ eventKey: 'S', href: '#' },
								React.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
						)
				),
				React.createElement(
						Navbar.Text,
						{ pullRight: true },
						'Anonymous'
				)
		);
};

module.exports.Component = CompetitionMenuNavbarCollapse;