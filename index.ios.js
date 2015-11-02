/**
 * PanJiaChen
 * 
 * 
 * https://github.com/PanJiaChen/ReactNative-wscn
 */
'use strict';

var React = require('react-native');
var IndexPage =require('./App/View/IndexPage.js')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} = React;

var ReactNativeWscn = React.createClass({
  render: function() {
    return (
      <React.NavigatorIOS style={styles.container} initialRoute={{ title: '华尔街见闻', component: IndexPage}}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('ReactNativeWscn', () => ReactNativeWscn);
