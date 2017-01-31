var React = require('react');
var ReactDOM = require('react-dom');

const CompetitionTabMatches = props => {

	const games = props.competition.games;

	return React.createElement(
		'table',
		{ className: 'table' },
		React.createElement(
			'tbody',
			null,
			games.map(game => {
				var nameStyleA = 'text-warning';
				var nameStyleB = 'text-warning';
				if (game.full_a > game.full_b) {
					nameStyleA = 'text-success';nameStyleB = 'text-danger';
				}
				if (game.full_a < game.full_b) {
					nameStyleA = 'text-danger';nameStyleB = 'text-success';
				}

				return React.createElement(
					'tr',
					{ key: game.id },
					React.createElement(
						'td',
						null,
						game.shortDate,
						' (',
						game.round,
						')'
					),
					React.createElement(
						'td',
						null,
						React.createElement(
							'span',
							{ className: nameStyleA },
							game.team_aName
						),
						' - ',
						React.createElement(
							'span',
							{ className: nameStyleB },
							game.team_bName
						)
					),
					React.createElement(
						'td',
						null,
						game.full_a,
						':',
						game.full_b,
						' ',
						game.forfeit ? '\u2718' : ''
					)
				);
			})
		)
	);
};

module.exports.Component = CompetitionTabMatches;