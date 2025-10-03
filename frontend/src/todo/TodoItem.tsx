import {useState} from "react";
import type {Todo} from "./Todo.ts";

type TodoProps = {initialTodo: Todo};

export const TodoItem = ({initialTodo}: TodoProps) => {
    const [todo, setTodo] = useState<Todo>(initialTodo);

    return (
        <li className="">
            <span className=" ">{todo.name}</span>
            <span className="">{todo.description}</span>
        </li>
    )




}