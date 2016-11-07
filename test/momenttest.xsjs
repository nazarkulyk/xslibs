/*global $*/
"use strict";

var moment = $.import("./../lib/moment-2.15.2.xsjslib").moment;

$.response.status = $.net.http.OK;
$.response.contentType = "application/json";	    
$.response.setBody(JSON.stringify({user: $.session.getUsername(), date: moment().format('MMMM Do YYYY, h:mm:ss a')}));