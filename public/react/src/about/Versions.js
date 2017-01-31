var React = require('react');
var ReactDOM = require('react-dom');

class Versions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
	const versions = this.props.versions;
    return (
		<div>
			<h4 className="bg-info padding-a">{versions.name}</h4>
			<emph className="padding-a">Version {versions.version}</emph>
			<div className="row">
				<div className="col-md-8">
					<h4 className="padding-a">Dependencies</h4>
    				<table className="table">
						<tbody>
							{versions.packages.map((pkg, i) =>
								<tr key={i}><td>{pkg.name}</td><td>{pkg.version}</td></tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
    );
  }
}
