import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const AddItem = () => {
  const [textValue, setTextValue] = useState('');
  const changeHandler = val => {
    console.log('====================================');
    console.log(val);
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
        onPress={() => console.log('item added')}>
        <Text>ADD TO-DO ITEM</Text>
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
    borderBottomColor: 'lightgray',
    paddingVertical: 5,
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'white',
    backgroundColor: 'coral',
    padding: 10,
    alignItems: 'center',
  },
});
