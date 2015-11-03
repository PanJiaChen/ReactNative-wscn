'use strict';

var React = require('react-native');
var BannerSlider = require('../component/BannerSlider.js');

var Api = require('../../WebApi/api.js');

var Style = require('./StyleSheet');

var sliderUrl = [];


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


class IndexPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      bannerDetails:'',
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    this.setState({
      pageLoaded: false
    });
    fetch(Api.getAllNode({
      p: this.state.currentPage+1
    }))
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData.results)
        this.setBanner(responseData.results);
      })
      .done();
  }

  setBanner(results){
    for (var i = 0; i < 5; i++) {
      sliderUrl.push(results[i])
    };
    this.setState({
      bannerDetails:sliderUrl
    })
  }


  render() {
    return (
      <View style={{alignItems:'center'}}>
        <BannerSlider bannerDetails={this.state.bannerDetails} />
      </View>
    );
  }


};


module.exports = IndexPage;