import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import TodoPage from "../TodoPage.tsx";
import {TodoItem} from "../TodoItem.tsx";
import type {Todo} from "../Todo.ts";

describe('Todo', () => {
    it('should display the title', async () => {
        render(<TodoPage/>)
        expect(screen.getByRole("heading", {name: "not my todo page"})).toBeInTheDocument;
    });

    it('should show item', () => {
        const todos: Todo = {id: 1, name: "Clean Room", description: "Gather all the trash and fold laundry", status: "Not Complete"};
        render(<TodoItem initialTodo={todos}/>)
        expect(screen.getByText("Clean Room")).toBeInTheDocument;

    });


})