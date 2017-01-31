var React = require('react');
var ReactDOM = require('react-dom');

const CompetitionTabTableRow = (props) => {
	
	return (
		<tr key={props.team.id}>
			<td>{props.index + 1}. {props.team.name}</td>
			<td>{props.team.games}</td>
			<td>{props.team.wins}</td>
		    <td>{props.team.draws}</td>
		    <td>{props.team.defeats}</td>
		    <td className="right">{props.team.scorePlus}:{props.team.scoreMinus}</td>
		    <td className="right">{props.team.scorePlus - props.team.scoreMinus}</td>
		    <td className="right"><strong>{props.team.pointsTotal}</strong></td>
		    <td>{props.team.forfeits}</td>
		</tr>
	);	
}

module.exports.Component = CompetitionTabTableRow;