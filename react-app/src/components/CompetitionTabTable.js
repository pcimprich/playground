var React = require('react');
var ReactDOM = require('react-dom');
var CompetitionTabTableRow = require('./CompetitionTabTableRow').Component;

const CompetitionTabTable = (props) => {

	const ranking = props.competition.ranking;
	
	return (
        <table className="table table-striped">
		  <thead>
	        <tr>
		      <th>Ranking</th>
			  <th>M</th>
		      <th>W</th>
		      <th>D</th>
		      <th>L</th>
		      <th className="right">Score</th>
		      <th className="right">+/-</th>
		      <th className="right">Points</th>
		      <th>F</th>
	        </tr>
		  </thead>
		  <tbody>
		  {ranking.map((team, index) =>
			<CompetitionTabTableRow team={team} index={index} key={team.id}/>  
		  )}
		  </tbody>
		  </table>
	  );
}

module.exports.Component = CompetitionTabTable;