import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class mainWeatherInfo extends React.Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <Text>Main Weather info.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 3,
  },
});
