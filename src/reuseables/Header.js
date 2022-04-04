import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../globalStyles';
import {sharedConstants} from '../constants';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{sharedConstants.headerTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.white,
  },
});
