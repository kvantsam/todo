import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos}) => {

    return (
        <ul>
            <li>
                <TodoListItem
                    label = {todos[0].label}
                    important={todos[0].important} />
            </li>
            <li>
                <TodoListItem
                    label = {todos[1].label}
                    important = {todos[1].important} />
            </li>
            <li>
                <TodoListItem
                    label = {todos[2].label}
                    important = {todos[2].important} />
            </li>
            <li>
                <TodoListItem
                    label = {todos[3].label}
                    important = {todos[3].important} />
            </li>
        </ul>
    );
};

export default TodoList;