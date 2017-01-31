var React = require('react');
var ReactDOM = require('react-dom');

class RootCompetition extends React.Component {
  constructor() {
    super();
    this.setCompetition = this.setCompetition.bind(this);
    this.state = {competition: {}};
  }

  setCompetition(json) {
    this.setState({competition: json});
  }
  
  render() {
  	return (
	  <div>
	    <CompetitionMenu competition={this.state.competition} onCompetitionChange={this.setCompetition} />
		<CompetitionBreadcrumbs competition={this.state.competition} />
	    <h1>{this.state.competition.name}</h1>
	  </div>
  	);
  }
}

ReactDOM.render(
  <RootCompetition />,
  document.getElementById('root')
);
