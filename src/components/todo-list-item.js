import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({ todo, onDelete, onCheck }) => {
  const style = {
    color: todo.important ? "steelblue" : "black",
    fontWeight: todo.important ? "bold" : "normal",
    textDecoration: todo.done ? "line-through" : "none",
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label " style={style}>
        {todo.label}
      </span>

      <button
        onClick={() => onCheck(todo.id)}
        type="button"
        className="btn bg-transparent btn-sm float-right"
      >
        {todo.done ? (
          <i className="fa fa-check text-success"></i>
        ) : (
          <i className="fa fa-check text-dark"></i>
        )}
      </button>

      <button
        onClick={() => onDelete(todo.id)}
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
