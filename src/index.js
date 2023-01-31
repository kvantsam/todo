import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

    const todoData = [
    { label: 'Drink Coffee', important: false,  id: 1},
    { label: 'React Application', important: true, id: 2 },
    { label: 'Make notes from your stud', important: false, id: 3 },
    { label: 'Do not drink alchohol', important: false, id: 4 },
];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));

// const todoData = [
//     { label: 'Drink Coffee', important: false,  id: 1},
//     { label: 'Implement React Application', important: true, id: 2 },
//     { label: 'Make notes from your stud', important: false, id: 3 },
//     { label: 'Do not drink alchohol', important: false, id: 4 },
// ];