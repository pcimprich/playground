var pjson = require('../package.json');
var bower = require('../public/bower.json');

function _crop(s) {
	return s.substr(s.indexOf('~') + 1);
}

module.exports.getVersions = function(callback) {
	
	// get versions of dependencies
	const versions = {
		name: pjson.name,
		version: pjson.version,
		packages: [
			{name: "Node.js", version: process.versions.node}, 
			{name: "V8", version: process.versions.v8},
			{name: "Express", version: _crop(pjson.dependencies.express)},
			{name: "React", version: _crop(pjson.dependencies.react)},
			{name: "AngularJS", version: _crop(bower.dependencies.angular)}
		]
	};
	
	callback(versions);
};
