var React = require('react');
var ReactDOM = require('react-dom');
var CompetitionTabTableRow = require('./CompetitionTabTableRow').Component;

const CompetitionTabTable = props => {

	const ranking = props.competition.ranking;

	return React.createElement(
		'table',
		{ className: 'table table-striped' },
		React.createElement(
			'thead',
			null,
			React.createElement(
				'tr',
				null,
				React.createElement(
					'th',
					null,
					'Ranking'
				),
				React.createElement(
					'th',
					null,
					'M'
				),
				React.createElement(
					'th',
					null,
					'W'
				),
				React.createElement(
					'th',
					null,
					'D'
				),
				React.createElement(
					'th',
					null,
					'L'
				),
				React.createElement(
					'th',
					{ className: 'right' },
					'Score'
				),
				React.createElement(
					'th',
					{ className: 'right' },
					'+/-'
				),
				React.createElement(
					'th',
					{ className: 'right' },
					'Points'
				),
				React.createElement(
					'th',
					null,
					'F'
				)
			)
		),
		React.createElement(
			'tbody',
			null,
			ranking.map((team, index) => React.createElement(CompetitionTabTableRow, { team: team, index: index, key: team.id }))
		)
	);
};

module.exports.Component = CompetitionTabTable;