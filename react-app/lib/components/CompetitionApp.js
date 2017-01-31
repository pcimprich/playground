var React = require('react');
var CompetitionMenu = require('./CompetitionMenu').Component;
var CompetitionBreadcrumbs = require('./CompetitionBreadcrumbs').Component;
var CompetitionTabs = require('./CompetitionTabs').Component;

const CompetitionApp = props => {

	const store = props.store;

	return React.createElement(
		'div',
		null,
		React.createElement(CompetitionMenu, null),
		React.createElement(
			'div',
			{ className: 'rr-content' },
			React.createElement(CompetitionBreadcrumbs, null),
			React.createElement(CompetitionTabs, null)
		)
	);
};

module.exports.Component = CompetitionApp;