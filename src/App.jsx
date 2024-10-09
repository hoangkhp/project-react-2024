import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const App = () => {
  //todoList la gia tri ban dau, setTodoList la gia tri cap nhat, useState nhan gia tri ban dau
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "WatchingYoutube" }
  ])
  //them dong data them vao thong qua setTodoList
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
    //sao chep tat ca du lieu cu trong todoList, cong viec moi se duoc them thong qua newTodo
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //logic xoa thanh phan
  const deleteTodo = (id) => {
    const deleteT = todoList.filter((todo) => todo.id !== id);
    setTodoList(deleteT)
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 &&
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
        }
        {todoList.length === 0 &&
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
        }
      </div>
      <Footer />
    </>

  )
}

export default App
