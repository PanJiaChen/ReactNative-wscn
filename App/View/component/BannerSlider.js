var React = require('react-native')
var Swiper = require('react-native-swiper')
var {
  StyleSheet,
  Text,
  View,
  Image,
} = React

var styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height:270
  }
})

var BannerSlider = React.createClass({
  render: function() {
    var bannerDetails=this.props.bannerDetails
    if(!bannerDetails){return (<View />) }
    return (
      <View>
        <Swiper style={styles.wrapper} height={270}
          onMomentumScrollEnd={function(e, state, context){}}
          autoplay={true} 
          dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10,
          }} loop={true}>
          <View style={styles.slide} title={<Text numberOfLines={1}>{bannerDetails[0].title}</Text>}>
            <Image style={styles.image} source={{uri: bannerDetails[0].img.url}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>{bannerDetails[1].title}</Text>}>
            <Image style={styles.image} source={{uri: bannerDetails[1].img.url}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>{bannerDetails[2].title}</Text>}>
            <Image style={styles.image} source={{uri: bannerDetails[2].img.url}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>{bannerDetails[3].title}</Text>}>
            <Image style={styles.image} source={{uri: bannerDetails[3].img.url}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>{bannerDetails[4].title}</Text>}>
            <Image style={styles.image} source={{uri: bannerDetails[4].img.url}} />
          </View>
        </Swiper>
      </View>
    )
  }
})

module.exports = BannerSlider