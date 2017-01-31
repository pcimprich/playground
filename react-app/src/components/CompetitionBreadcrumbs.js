var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var Breadcrumb = require('react-bootstrap').Breadcrumb;

class CompetitionBreadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
	  const competition = this.props.competition;
	  const info = <p className="bg-info">Select a category and competition ...</p>;
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
	  
    return competition.id ? breadcrumbs : info;
  }
}

const mapStateToProps = (state) => {
	return {
		competition: state.competition
	}
}

CompetitionBreadcrumbs = connect(mapStateToProps, null)(CompetitionBreadcrumbs);

module.exports.Component = CompetitionBreadcrumbs;