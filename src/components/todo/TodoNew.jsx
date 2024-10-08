const TodoNew = (props) => {
    const { addNewTodo } = props;
    addNewTodo("World");
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;