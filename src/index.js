import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";
import ModalForm from "./components/modal_form";

import "./index.css";

const App = () => {
  const [todos, setTodos] = React.useState([
    { done: true, label: "Drink Coffee", important: false, id: 1 },
    { done: false, label: "React Application", important: true, id: 2 },
    {
      done: false,
      label: "Make notes from your stud",
      important: false,
      id: 3,
    },
    { done: false, label: "Do not drink alchohol", important: false, id: 4 },
  ]);

  const [deletedTodos, setDeletedTodos] = React.useState([]);

  const [filter, setFilter] = React.useState("all");
  const [filteredSubstring, setFilteredSubstring] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const filterTodo = (filter_by) => {
    setFilter(filter_by);
  };

  const deleteTodo = (id) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    setDeletedTodos([...deletedTodos, todoToDelete]);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const checkTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const changeImportance = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const searchTodo = (substring) => {
    filterTodo("filterBySubStr");
    setFilteredSubstring(substring);
  };

  const addTodo = (label) => {
    if (label.length <= 0) {
      setOpenModal(false);
      return;
    }
    const newTodo = {
      label,
      important: false,
      done: false,
      id: todos.length + 1,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setOpenModal(false);
  };

  return (
    <div className="todo-app">
      {openModal && <ModalForm onAdd={addTodo} setModal={setOpenModal} />}
      <AppHeader
        toDo={todos.filter((elem) => elem.done === false).length}
        done={todos.filter((elem) => elem.done === true).length}
      />
      <div className="top-panel d-flex">
        <SearchPanel onSearch={searchTodo} />
        <ItemStatusFilter onFilter={filterTodo} filter={filter} />
      </div>
      {filter === "all" ? (
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onCheck={checkTodo}
          changeImportance={changeImportance}
        />
      ) : filter === "active" ? (
        <TodoList
          todos={todos.filter((elem) => elem.done === false)}
          onDelete={deleteTodo}
          onCheck={checkTodo}
          changeImportance={changeImportance}
        />
      ) : filter === "done" ? (
        <TodoList
          todos={todos.filter((elem) => elem.done === true)}
          onDelete={deleteTodo}
          onCheck={checkTodo}
          changeImportance={changeImportance}
        />
      ) : filter === "deleted" ? (
        <TodoList
          deleted={true}
          todos={deletedTodos}
          onDelete={deleteTodo}
          onCheck={checkTodo}
          changeImportance={changeImportance}
        />
      ) : (
        <TodoList
          todos={todos.filter((elem) =>
            elem.label.toLowerCase().includes(filteredSubstring.toLowerCase())
          )}
          onDelete={deleteTodo}
          onCheck={checkTodo}
          changeImportance={changeImportance}
        />
      )}
      <button
        className="btn btn-primary mt-3"
        onClick={() => setOpenModal(true)}
      >
        Add Todo
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
