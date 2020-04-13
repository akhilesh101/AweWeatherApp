import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class weeklyWeatherInfo extends React.Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <Text>Weekly Weather info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 2,
    backgroundColor: '#2607EC',
  },
});
