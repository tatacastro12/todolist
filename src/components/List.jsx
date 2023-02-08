import React from "react";
import Todo from "./Todo"
const List = ({list}) => {
    const rendereList = list.map((item) => <Todo title={item.title} completed= {item.completed} key={item.tittle}/>);

    return(
        <div className="ui grid center aligned">
            {rendereList}
        </div>
        );
    };
export default List;
