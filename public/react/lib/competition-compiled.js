var React = require('react');
var ReactDOM = require('react-dom');

var Breadcrumb = require('react-bootstrap').Breadcrumb;

class CompetitionBreadcrumbs extends React.Component {
		constructor(props) {
				super(props);
		}

		render() {
				const competition = this.props.competition;
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

				return competition.id ? breadcrumbs : React.createElement('div', null);
		}
}
var React = require('react');
var ReactDOM = require('react-dom');

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

class CompetitionMenu extends React.Component {
		constructor(props) {
				super(props);
				this.onSelect = this.onSelect.bind(this);
				this.state = { navSelected: null };
		}

		onSelect(eventKey) {
				this.setState({ navSelected: eventKey });

				// selected competition object is passed up
				if (eventKey.substr(0, 1) == 'C') {
						var that = this;

						fetch('/api/competitions/' + eventKey.substr(1, 1)).then(function (response) {
								return response.json();
						}).then(function (json) {
								//console.log('parsed json: ', json)
								that.props.onCompetitionChange(json);
						}).catch(function (ex) {
								console.log('parsing failed: ', ex);
						});
				}
		}

		render() {
				const navbar = React.createElement(
						Navbar,
						{ collapseOnSelect: true, onSelect: this.onSelect },
						React.createElement(
								Navbar.Header,
								null,
								React.createElement(
										Navbar.Brand,
										null,
										React.createElement(
												'a',
												{ href: '/competition' },
												'uResults'
										)
								),
								React.createElement(Navbar.Toggle, null)
						),
						React.createElement(
								Navbar.Collapse,
								null,
								React.createElement(CompetitionMenuDropdowns, { competition: this.props.competition, onCompetitionChange: this.props.onCompetitionChange }),
								React.createElement(
										Nav,
										{ pullRight: true },
										React.createElement(
												NavItem,
												{ eventKey: 'S', href: '#' },
												React.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
										)
								),
								React.createElement(
										Navbar.Text,
										{ pullRight: true },
										'Anonymous'
								)
						)
				);

				return navbar;
		}
}
var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

class CompetitionMenuDropdowns extends React.Component {
		constructor(props) {
				super(props);
				this.state = { categories: [{ name: "", id: "", competitions: [] }] };
		}

		componentDidMount() {
				var that = this;

				fetch('/api/categories?withCompetitions=1').then(function (response) {
						return response.json();
				}).then(function (json) {
						//console.log('parsed json: ', json)
						that.setState({ categories: json });
				}).catch(function (ex) {
						console.log('parsing failed: ', ex);
				});
		}

		render() {
				const categories = this.state.categories;

				const dropdowns = React.createElement(
						Nav,
						null,
						categories.map(cat => React.createElement(
								NavDropdown,
								{ key: cat.id, title: cat.name, id: 'category-dropdown' + cat.id },
								cat.competitions.map(comp => React.createElement(
										MenuItem,
										{ eventKey: 'C' + comp.id, key: comp.id },
										comp.name
								))
						))
				);

				return dropdowns;
		}
}
var React = require('react');
var ReactDOM = require('react-dom');

class RootCompetition extends React.Component {
  constructor() {
    super();
    this.setCompetition = this.setCompetition.bind(this);
    this.state = { competition: {} };
  }

  setCompetition(json) {
    this.setState({ competition: json });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(CompetitionMenu, { competition: this.state.competition, onCompetitionChange: this.setCompetition }),
      React.createElement(CompetitionBreadcrumbs, { competition: this.state.competition }),
      React.createElement(
        'h1',
        null,
        this.state.competition.name
      )
    );
  }
}

ReactDOM.render(React.createElement(RootCompetition, null), document.getElementById('root'));
