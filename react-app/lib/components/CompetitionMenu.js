var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var Navbar = require('react-bootstrap').Navbar;
var CompetitionMenuNavbarHeader = require('./CompetitionMenuNavbarHeader').Component;
var CompetitionMenuNavbarCollapse = require('./CompetitionMenuNavbarCollapse').Component;
var handleMenuSelection = require('../services/competition').handleMenuSelection;

class CompetitionMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const navbar = React.createElement(
			Navbar,
			{ collapseOnSelect: true, onSelect: this.props.onSelect },
			React.createElement(CompetitionMenuNavbarHeader, null),
			React.createElement(CompetitionMenuNavbarCollapse, null)
		);

		return navbar;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSelect: key => {
			handleMenuSelection(key, dispatch);
		}
	};
};

CompetitionMenu = connect(null, mapDispatchToProps)(CompetitionMenu);

module.exports.Component = CompetitionMenu;