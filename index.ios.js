/**
 * PanJiaChen
 * 
 * 
 * https://github.com/PanJiaChen/ReactNative-wscn
 */
'use strict';

var React = require('react-native');
var IndexPage =require('./App/View/index/IndexPage.js')
var LivePage =require('./App/View/livenews/LivePage')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  NavigatorIOS,
  TabBarIOS
} = React;


function _icon(imageUri) {
    return {
        uri: imageUri,
        isStatic: true
    };
}

var TabBarItemIOS = TabBarIOS.Item;

var ReactNativeWscn = React.createClass({
  getInitialState: function() {
        return {
            selectedTab: 'latestTab'
        };
    },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarItemIOS accessibilityLabel={"Latest"}  selected={this.state.selectedTab === 'latestTab'}
            title="新闻"
            name="latestTab"
            icon={_icon('recents')}
            onPress={() => {
                this.setState({
                  selectedTab: 'latestTab'
                });
            }}>
            <NavigatorIOS style={styles.container} initialRoute={{ title: '华尔街见闻', component: IndexPage}}/>
        </TabBarItemIOS>
        <TabBarItemIOS accessibilityLabel={"Nodes"}
            selected={this.state.selectedTab === 'nodeMap'}
            title="直播
            "
            name="nodeMap"
            icon={_icon('bookmarks')}
            onPress={() => {
                this.setState({
                  selectedTab: 'nodeMap'
                });
            }}>
            <LivePage />
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#red',
    height:20
  },
  navigator: {
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('ReactNativeWscn', () => ReactNativeWscn);
