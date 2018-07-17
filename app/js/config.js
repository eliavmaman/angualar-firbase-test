"use strict";

/**
 * Config module which defines Firebase URL.
 * @module myApp/config
 */
var app = angular.module("myApp.config", []);

// your Firebase URL goes here
var config = {
    apiKey: "AIzaSyBSfYpTPNVHfHObCZleqp5uqWi_AvDXsNA",
    authDomain: "eliav-test.firebaseapp.com",
    databaseURL: "https://eliav-test.firebaseio.com",
    projectId: "eliav-test",
    storageBucket: "eliav-test.appspot.com",
    messagingSenderId: "1013457490545"
};
firebase.initializeApp(config);

// double-check whether the app has been configured
if (config.authDomain === "angularfire-survey.firebaseapp.com") {
    angular.element(document.body).html("<h1>Please configure app/js/config.js before running!</h1>");
}