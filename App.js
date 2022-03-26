import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from './src/reuseables/Header';
import ToDoItem from './src/reuseables/ToDoItem';
import AddItem from './src/reuseables/AddItem';

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

  // const onAdd = (val) => {
  //   setTodos(val=>{
  //     return [
  //       {val:val},
  //       ...prevTodos
  //     ]
  //   })
  // };
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      {/* to-do form */}
      <View style={styles.content}>
        
        <AddItem />
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
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  content: {
    padding: 20,
    // backgroundColor: 'lightgray',
  },
});
