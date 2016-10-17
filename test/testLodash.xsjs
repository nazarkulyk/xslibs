/*global _*/
$.import("../lib/lodash.xsjslib").runInContext(this);

var test = [{ t: "1"}, {t: "2"}];

$.response.setBody(JSON.stringify(_.map(test, function(item) { return _.values(item); })));
$.response.contentType = "application/json";
