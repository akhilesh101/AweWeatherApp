import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class hourlyWeatherInfo extends React.Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <Text>Hourly Weather info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 2,
    backgroundColor: '#BF6E0A',
  },
});
