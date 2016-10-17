/*global _*/
var result = $.import("testLodashWraper.xsjslib").TestLib(this);

$.response.setBody(result);
$.response.contentType = "application/json";
