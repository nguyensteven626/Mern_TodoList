
import './App.css';
import TodoForm from './components/TodoForm';
import React, {useState} from 'react';
import Display from './components/Display';

function App() {

  const [list, setList] = useState([]);

   
  const addTask = (newTask) => {
    console.log(newTask);
    setList([...list, newTask])
    console.log("add new color function from app.js");
  }

  // const deleteTask = (deleteIdx) => {
  //   console.log("deleteTask function", deleteIdx);
  //   //use filter to select all tasks without the deleteIdx and re-array them
  //   const newFilteredList = list.filter((l, idx) => {
  //     return idx !== deleteIdx;
  //   });
  //   setList(newFilteredList);
  // }

  const deleteTask = (deleteIdx) => {
    console.log("deleteTask function", deleteIdx);
    //use filter to select all tasks without the deleteIdx and re-array them
    const newFilteredList = list.filter( (l, idx) => {
      if (idx !== deleteIdx) {
        return true;
      } else {
        return false;
      }
    });
    setList(newFilteredList)
  }
 
  const updateTask = (idx) => {
    console.log(idx);
    const copyList = [...list];
    if (copyList[idx].status === true) {
      copyList[idx].status = false;
    }else {
      copyList[idx].status = true;
    }
    setList(copyList);
  }

  return (
    <div className="App">
      <TodoForm addTask = {addTask}/>

      <Display list = {list} deleteTask={deleteTask} updateTask={updateTask} />

    </div>
  );
}

export default App;
