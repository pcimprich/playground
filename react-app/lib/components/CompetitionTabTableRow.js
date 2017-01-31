var React = require('react');
var ReactDOM = require('react-dom');

const CompetitionTabTableRow = props => {

	return React.createElement(
		'tr',
		{ key: props.team.id },
		React.createElement(
			'td',
			null,
			props.index + 1,
			'. ',
			props.team.name
		),
		React.createElement(
			'td',
			null,
			props.team.games
		),
		React.createElement(
			'td',
			null,
			props.team.wins
		),
		React.createElement(
			'td',
			null,
			props.team.draws
		),
		React.createElement(
			'td',
			null,
			props.team.defeats
		),
		React.createElement(
			'td',
			{ className: 'right' },
			props.team.scorePlus,
			':',
			props.team.scoreMinus
		),
		React.createElement(
			'td',
			{ className: 'right' },
			props.team.scorePlus - props.team.scoreMinus
		),
		React.createElement(
			'td',
			{ className: 'right' },
			React.createElement(
				'strong',
				null,
				props.team.pointsTotal
			)
		),
		React.createElement(
			'td',
			null,
			props.team.forfeits
		)
	);
};

module.exports.Component = CompetitionTabTableRow;