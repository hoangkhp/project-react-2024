import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {

  const hoidanit = "Eric";
  const data = {
    address: "Hai Phong",
    major: "Computer Science"
  }

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        data={data}
        name={hoidanit}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
