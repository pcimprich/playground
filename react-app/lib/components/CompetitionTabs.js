var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var CompetitionTabTable = require('./CompetitionTabTable').Component;
var CompetitionTabMatches = require('./CompetitionTabMatches').Component;
var actionSetTabs = require('../reducers/actions').actionSetTabs;

class CompetitionTabs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const tabs = React.createElement(
			Tabs,
			{ activeKey: this.props.tab, onSelect: this.props.onSelect, id: 'competition-tabs' },
			React.createElement(
				Tab,
				{ eventKey: 1, title: 'Ranking' },
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: 'col-md-8' },
						React.createElement(CompetitionTabTable, { competition: this.props.competition })
					)
				)
			),
			React.createElement(
				Tab,
				{ eventKey: 2, title: 'Matches' },
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: 'col-md-8' },
						React.createElement(CompetitionTabMatches, { competition: this.props.competition })
					)
				)
			)
		);

		return this.props.competition.id ? tabs : React.createElement('div', null);
	}
}

const mapStateToProps = state => {
	return {
		tab: state.tab,
		competition: state.competition
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSelect: key => {
			dispatch(actionSetTabs(key));
		}
	};
};

CompetitionTabs = connect(mapStateToProps, mapDispatchToProps)(CompetitionTabs);

module.exports.Component = CompetitionTabs;