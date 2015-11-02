'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Api = require('../WebApi/api');


var sliderImgs = [];


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


class Slider extends Component{
    render(){
        return (
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
            <Image style={[styles.slide,]} source={{uri: "http://posts.cdn.wallstcn.com/27/2d/d9/1200.jpg"}}></Image>
            <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
            <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
            <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
            <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
          </Swiper>
        );
    }
};

class IndexPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      
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
      sliderImgs.push(results[i].img.url)
      console.log(sliderImgs)
    };
  }


  render() {
    return (
      <View style={{marginTop:80,padding:20,alignItems:'center'}}>
        <Slider/>
        <Text>banan</Text>
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

module.exports = IndexPage;