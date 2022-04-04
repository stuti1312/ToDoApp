import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../globalStyles';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Sandbox1</Text>
      <Text style={styles.box2}>Sandbox2</Text>
      <Text style={styles.box3}>Sandbox3</Text>
      <Text style={styles.box4}>Sandbox4</Text>
    </View>
  );
};

export default Sandbox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  box1: {
    flex: 3,
    backgroundColor: colors.lightGray,
    padding: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: colors.orange,
    padding: 20,
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 30,
  },
  box4: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 40,
  },
});
