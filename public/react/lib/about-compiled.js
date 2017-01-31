var React = require('react');
var ReactDOM = require('react-dom');

class Versions extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const versions = this.props.versions;
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h4',
				{ className: 'bg-info padding-a' },
				versions.name
			),
			React.createElement(
				'emph',
				{ className: 'padding-a' },
				'Version ',
				versions.version
			),
			React.createElement(
				'div',
				{ className: 'row' },
				React.createElement(
					'div',
					{ className: 'col-md-8' },
					React.createElement(
						'h4',
						{ className: 'padding-a' },
						'Dependencies'
					),
					React.createElement(
						'table',
						{ className: 'table' },
						React.createElement(
							'tbody',
							null,
							versions.packages.map((pkg, i) => React.createElement(
								'tr',
								{ key: i },
								React.createElement(
									'td',
									null,
									pkg.name
								),
								React.createElement(
									'td',
									null,
									pkg.version
								)
							))
						)
					)
				)
			)
		);
	}
}
var React = require('react');
var ReactDOM = require('react-dom');

class VersionsContainer extends React.Component {
		constructor() {
				super();
				this.state = { versions: { name: "", version: "", packages: [] } };
		}

		componentDidMount() {
				var that = this;

				fetch('/api/versions').then(function (response) {
						return response.json();
				}).then(function (json) {
						//console.log('parsed json: ', json)
						that.setState({ versions: json });
				}).catch(function (ex) {
						console.log('parsing failed: ', ex);
				});
		}

		render() {
				return React.createElement(Versions, { versions: this.state.versions });
		}
}

const versionsContainerElement = React.createElement(VersionsContainer, null);

ReactDOM.render(versionsContainerElement, document.getElementById('root'));
