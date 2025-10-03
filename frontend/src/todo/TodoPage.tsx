import {useState} from 'react';
import type {Todo} from "./Todo.ts";
import {TodoItem} from "./TodoItem.tsx";

export const TodoPage = () => {
    const [todo] = useState<Todo[]>([])
    return(
        <>
            <h2>My Todo Page</h2>
            <TodoItem initialTodo={{
                id: null,
                name: "",
                description: "",
                status: ""
            }} {...todo}/>
        </>
    );

};


export default TodoPage;