import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ToDoItem = ({listItem, onClick}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick(listItem.key);
      }}>
      <Text style={styles.listItem}>{listItem.text}</Text>
    </TouchableOpacity>
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
    color: 'black',
    fontWeight: '300',
  },
});
