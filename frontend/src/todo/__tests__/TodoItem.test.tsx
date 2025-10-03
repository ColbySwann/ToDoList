import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {TodoItem} from "../TodoItem.tsx";
import type {Todo} from "../Todo.ts";

describe('Todo', () => {
    it('should display a single item', async () => {
        const todos: Todo = {id: 1, name: "Clean Room", description: "Gather all the trash and fold laundry", status: "Not Complete"};
        render(<TodoItem initialTodo={todos}/>)
        const listItem = screen.getByRole("listitem")
        expect(listItem).toBeInTheDocument();
    });


    it('should show item', async () => {
        const todos: Todo = {id: 1, name: "Clean Room", description: "Gather all the trash and fold laundry", status: "Not Complete"};
        render(<TodoItem initialTodo={todos}/>)
        expect(screen.getByText(/clean/i)).toBeInTheDocument;

    });

    it('should ', () => {
        
    });


})