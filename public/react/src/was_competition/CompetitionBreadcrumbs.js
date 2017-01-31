var React = require('react');
var ReactDOM = require('react-dom');

var Breadcrumb = require('react-bootstrap').Breadcrumb;

class CompetitionBreadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
	  const competition = this.props.competition;
	  const breadcrumbs = (
	    <Breadcrumb>
	      <Breadcrumb.Item active>
		    {competition.categoryName}
	      </Breadcrumb.Item>
	      <Breadcrumb.Item active>
	        {competition.name}
	      </Breadcrumb.Item>
	    </Breadcrumb>
	  );
	  
    return competition.id ? breadcrumbs : <div />;
  }
}
