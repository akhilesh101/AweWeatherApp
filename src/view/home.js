import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainWeatherInfoComponent from '../components/mainWeatherInfo';
import HourlyWeatherInfoComponent from '../components/hourlyWeatherInfo';
import WeeklyWeatherInfoComponent from '../components/weeklyWeatherInfo';
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
          <MainWeatherInfoComponent />
          <HourlyWeatherInfoComponent />
          <WeeklyWeatherInfoComponent />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },

  textStyle: {
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 14,
  },

  linearGradientStyle: {
    flex: 1,
  },
});
