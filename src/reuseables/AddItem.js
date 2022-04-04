import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../globalStyles';
import {sharedConstants} from '../constants';

const AddItem = ({onClick}) => {
  const [textValue, setTextValue] = useState('');
  const changeHandler = val => {
    // console.log(val);
    setTextValue(val);
  };
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="New Todo..."
        onChangeText={inputValue => changeHandler(inputValue)}
        style={styles.inputText}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => onClick(textValue)}>
        <Text style={styles.addBtnTitle}>{sharedConstants.btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    marginBottom: 40,
    marginHorizontal: 10,
  },
  inputText: {
    fontSize: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingVertical: 5,
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.white,
    backgroundColor: colors.orange,
    padding: 10,
    alignItems: 'center',
  },
  addBtnTitle: {color: colors.white},
});
