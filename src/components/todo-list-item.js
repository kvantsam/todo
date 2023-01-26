import React from "react";

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };
    return <span style={ style }>{ label }</span>
    //props argument in TodoListItem
    //return <span>{ props.label }</span>
};

export default TodoListItem;
