import React from "react";
<<<<<<< HEAD
import Todo from "./Todo"
const List = ({ list, removeTodoListProp }) => {
    const renderedList = list.map((item) => <Todo title={item.title} completed={item.completed}
        removeTodoItemProp={(e) => removeTodoListProp(item.id)} key={item.title} />);

=======
import Todo from "./Todo";

const List = ({ list, removeTodoListProp }) => {
    const renderedList = list.map(
        (item) => (
            <Todo
                title={item.title}
                completed={item.completed}
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                key={item.title}
            />
        )
    );
>>>>>>> d9d8e6b3446dcbf47049bb4f6be061f69e645010
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
<<<<<<< HEAD

=======
>>>>>>> d9d8e6b3446dcbf47049bb4f6be061f69e645010
    );
};
export default List;
