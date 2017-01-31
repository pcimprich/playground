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
		const info = React.createElement(
			'p',
			{ className: 'bg-info' },
			'Select a category and competition ...'
		);
		const breadcrumbs = React.createElement(
			Breadcrumb,
			null,
			React.createElement(
				Breadcrumb.Item,
				{ active: true },
				competition.categoryName
			),
			React.createElement(
				Breadcrumb.Item,
				{ active: true },
				competition.name
			)
		);

		return competition.id ? breadcrumbs : info;
	}
}

const mapStateToProps = state => {
	return {
		competition: state.competition
	};
};

CompetitionBreadcrumbs = connect(mapStateToProps, null)(CompetitionBreadcrumbs);

module.exports.Component = CompetitionBreadcrumbs;