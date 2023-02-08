import React from "react";

import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDelete, onCheck, deleted, changeImportance }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map((elem) => (
        <li key={elem.id} className="list-group-item">
          <TodoListItem
            changeImportance={changeImportance}
            deleted={deleted}
            onDelete={onDelete}
            onCheck={onCheck}
            todo={elem}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
