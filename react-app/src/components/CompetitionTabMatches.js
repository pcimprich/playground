var React = require('react');
var ReactDOM = require('react-dom');

const CompetitionTabMatches = (props) => {
  
	  const games = props.competition.games;
	 
	  return (
		  <table className="table">
		  	<tbody>
		  	{games.map((game) => {
				var nameStyleA = 'text-warning';
				var nameStyleB = 'text-warning';
				if (game.full_a > game.full_b) {nameStyleA = 'text-success'; nameStyleB = 'text-danger'}
				if (game.full_a < game.full_b) {nameStyleA = 'text-danger'; nameStyleB = 'text-success'}
				
				return (
					<tr key={game.id}>
						<td>{game.shortDate} ({game.round})</td>
						<td>
							<span className={nameStyleA}>{game.team_aName}</span> - <span className={nameStyleB}>{game.team_bName}</span>
						</td>
						<td>{game.full_a}:{game.full_b} {game.forfeit ? '\u2718' : ''}</td>
					</tr>
				)}
		  	)}
			</tbody>
		</table>
	  );
}

module.exports.Component = CompetitionTabMatches;