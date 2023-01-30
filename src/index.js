import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false,  id: 1},
        { label: 'Implement React Application', important: true, id: 2 },
        { label: 'Make notes from your stud', important: false, id: 3 },
        { label: 'Do not drink alchohol', important: false, id: 4 },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos =  {todoData} />
            <ItemStatusFilter />
        </div>
    );
}
    ReactDOM.render(<App />,
        document.getElementById('root'));