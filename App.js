import {
  StyleSheet,
  Text,
  Alert,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Header from './src/reuseables/Header';
import ToDoItem from './src/reuseables/ToDoItem';
import AddItem from './src/reuseables/AddItem';
import Sandbox from './src/reuseables/Sandbox';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy tea', key: '2'},
    {text: 'buy milk', key: '3'},
    {text: 'buy drink', key: '4'},
    {text: 'buy water', key: '5'},
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todos => todos.key != key);
    });
  };

  const onAdd = addText => {
    if (addText.length > 3) {
      setTodos(prevTodos => {
        return [{text: addText, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todo title must be of more than 3 characters', [
        {text: 'OK', onPress: () => console.log('understood, alert closed.')},
      ]);
    }
  };
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('keyborad dismiss');
      }}>
      <View style={styles.container}>
        {/* header */}
        <Header />

        {/* to-do form */}
        <View style={styles.content}>
          <AddItem onClick={onAdd} />
          {/* list */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <ToDoItem listItem={item} onClick={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex:1,
    padding: 20,
  },
  list:{
    flex:1, 
  }
});
