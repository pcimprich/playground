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
	  const tabs = (
 	    <Tabs activeKey={this.props.tab} onSelect={this.props.onSelect} id="competition-tabs">
          <Tab eventKey={1} title="Ranking">
		    <div className="row">
	  		  <div className="col-md-8">
		        <CompetitionTabTable competition={this.props.competition} />
		      </div>
		    </div>
		  </Tab>
          <Tab eventKey={2} title="Matches">
		    <div className="row">
	  		  <div className="col-md-8">
		        <CompetitionTabMatches competition={this.props.competition} />
		      </div>
		    </div>
		  </Tab>
        </Tabs>
	  );
	  
	  return this.props.competition.id ? tabs : <div/>;
  }
}

const mapStateToProps = (state) => {
	return {
		tab: state.tab,
		competition: state.competition
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSelect: (key) => {
			dispatch(actionSetTabs(key))
		}
	}
}

CompetitionTabs = connect(mapStateToProps, mapDispatchToProps)(CompetitionTabs);

module.exports.Component = CompetitionTabs;