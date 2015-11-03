'use strict';

var React = require('react-native');

var {
	StyleSheet,
	Image
} = React;

module.exports = StyleSheet.create({
	wrapper: {
        height:80,
    },
    slide: {
        height:80,
        resizeMode: Image.resizeMode.contain,
    },

});
