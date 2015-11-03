'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Component,
  ActivityIndicatorIOS,
  ListView,
  NetInfo,
  reachabilityIOS
} = React;


class LivePage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={{marginTop:80,padding:20,alignItems:'center'}}>
        <Text>直播页面</Text>
      </View>
    );
  }


};

var styles = StyleSheet.create({
  //slider
    wrapper: {
        height:80,
    },
    slide: {
        height:80,
        resizeMode: Image.resizeMode.contain,
    },

});

module.exports = LivePage;