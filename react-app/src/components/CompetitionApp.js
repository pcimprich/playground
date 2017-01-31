var React = require('react');
var CompetitionMenu = require('./CompetitionMenu').Component;
var CompetitionBreadcrumbs = require('./CompetitionBreadcrumbs').Component;
var CompetitionTabs = require('./CompetitionTabs').Component;

const CompetitionApp = (props) => {
  
	const store = props.store;
	
 	return (
		<div>
		  <CompetitionMenu />
		  <div className="rr-content">
		    <CompetitionBreadcrumbs />
		    <CompetitionTabs />
		  </div>
	  	</div>
  	);
}

module.exports.Component = CompetitionApp;