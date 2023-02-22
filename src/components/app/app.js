import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";
import './app.css';

export  default  class  App extends Component {

    maxId = 100;

    state = {
     todoData : [
         this.createTodoItem('Drink Coffee'),
         this.createTodoItem('Make Awesome App'),
         this.createTodoItem('Have a lunch')
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }
    deleteItem = (id) => {
        this.setState(({todoData} ) => {
            const idx = todoData.findIndex((element) => element.id === id);
            // console.log(idx);
                const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx +1)
            ];

            return{
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            // todoDate.push(newItem);
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((element) => element.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx +1)
        ];

    }

    onToggleDone = (id) => {
       this.setState(({todoData}) => {
          return {
               todoData: this.toggleProperty(todoData, id, 'done' )
           };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important' )
            };
        });

    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return  items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }


    render() {
        const { todoData, term } = this.state;

        const visibleItems = this.search(todoData, term);
        const doneCount = todoData.filter((element) => element.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                    onSearchChange = {this.onSearchChange} />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={ visibleItems }
                          onDeleted = { this.deleteItem }
                          onToggleImportant = { this.onToggleImportant}
                          onToggleDone = { this.onToggleDone}
                />
                <ItemAddForm onItemAdded = {this.addItem } />

            </div>
        );
    };
}
