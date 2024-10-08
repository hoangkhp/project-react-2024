const TodoData = (props) => {
    const { name, data } = props;
    return (
        <div className='todo-data'>
            <div> Learning React {name}</div>
            <div>Watching Youtube {data.address}</div>
        </div>
    )
}

export default TodoData;