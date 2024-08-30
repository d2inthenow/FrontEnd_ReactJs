
const AddTodo = (props) => {
    const { todo, setTodo, handlerClickBtn } = props;
    return (
        <div>
            <label>TodoName</label>
            <input value={todo} type='text' onChange={(event) => setTodo(event.target.value)} />
            <button type="button" onClick={() => handlerClickBtn()}>Submit</button>
        </div>

    )
};


export default AddTodo;
