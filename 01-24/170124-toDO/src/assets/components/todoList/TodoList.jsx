import TodoItem from "../todoItem/TodoItem";

const TodoList = ({todo}) => {
    return (  
        <>
        <h1>Todo-List</h1>
        {todo.map((el, index) => {
            return(
                <div key={index}>
                    <TodoItem
                        todo={el.todo}
                    />
                </div>
            )
        })}
        </>
    );
}

export default TodoList
