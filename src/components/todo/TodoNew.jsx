import { useState } from "react";

const TodoNew = (props) => {
    //useState hook (getter/ setter)
    const [valueInput, setValueInput] = useState("king");
    //valueInput la bien luu gia trị 

    const { addNewTodo } = props;

    const handleClick = () => {
        addNewTodo(valueInput)
    }

    //ham thay doi gia tri dua vao o input
    const handleOnChange = (name) => {
        console.log("handle on Change", name);
        setValueInput(name);
    }
    // addNewTodo("World");
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
                //layy gia tri cua o input truyen vao ham handleOnChange
                value={valueInput}
            />
            <button style={{
                cursor: "pointer"
            }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;