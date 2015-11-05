'use strict';

var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');

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
       <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
      </ScrollableTabView>
    );
  }
};

class ReactPage extends Component{
  render(){
    return(
        <Text>apple</Text>
    )
  }
}

class FlowPage extends Component{
  render(){
    return(
        <Text>FlowPage</Text>
    )
  }
}

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