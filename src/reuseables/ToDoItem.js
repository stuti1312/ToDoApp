import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../globalStyles';

const ToDoItem = ({listItem, onClick}) => {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={() => {
          onClick(listItem.key);
        }}>
        <Icon name="trash" size={25} color={colors.black} />
      </TouchableOpacity>
      <Text style={styles.listItemTitle}>{listItem.text}</Text>
    </View>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteIcon: {
    marginRight: 10,
  },
  listItemTitle: {color: colors.black, fontWeight: '300'},
});
