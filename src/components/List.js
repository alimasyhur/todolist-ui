import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const renderedList = list.map(
    (item) => (
        <Todo
            title={item.title}
            key={item._id}
            completed={item.completed}
            removeTodoItemProp={() => removeTodoListProp(item._id)}
            editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
        />
    ));

    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
}

export default List;