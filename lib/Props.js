var _ = require('underscore');

function getUnknownProps(props, knownProps) {
	var result = _.extend({}, props);
	_.each(knownProps, function(knownProp) {
		delete result[knownProp];
	});
	return result;
}

module.exports = {
	getUnknownProps: getUnknownProps
};
