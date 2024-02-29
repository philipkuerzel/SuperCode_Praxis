import React from "react";
import { useAppState } from "../context";

const TodoItem = ({title, done, id}) => {
    const { taskDone, delTask } = useAppState();

    return (
        <div key={id} className="task">
            <input
                className="checkbox"
                type="checkbox"
                checked={done}
                onChange={() => taskDone(id, !done)}
            />
            <span
                style={{
                    textDecoration: done ? "line-through" : "none",
                }}
            >
                {title}
            </span>
            <button className="delBtn" onClick={() => delTask(id, done)}>
                🗑️
            </button>
        </div>
    );
};

export default TodoItem;
