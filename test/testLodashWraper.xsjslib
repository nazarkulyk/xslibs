/*global _*/
var testLib = function() {
	$.import("../lib/lodash.xsjslib").runInContext(this);

	var test = [{ t: "3"}, {t: "4"}];

	return JSON.stringify(_.map(test, function(item) { return _.values(item); }));
};

function TestLib(context) {
	return testLib.call(context);
}