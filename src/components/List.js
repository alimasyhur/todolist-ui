import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp }) => {
    const renderedList = list.map((item) => <Todo
        title={item.title}
        key={item.title}
        completed={item.completed}
        removeTodoItemProp={() => removeTodoListProp(item.id)}
    />);

    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
}

export default List;