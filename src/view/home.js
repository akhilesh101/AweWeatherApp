import React from 'react';
import {Container, Text} from 'native-base';
import {StyleSheet,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  render() {
    return (
      <LinearGradient
        style={styles.linearGradientStyle}
        colors={['#044c34', '#09ab76', '#22c590']}>
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>You landed on the home page.</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 14,
  },

  linearGradientStyle: {
    flex:1
  },
});
