import React, { useState } from "react";
const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompletedState] = useState(completed);



    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClick = () => {
        setCompletedState((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    };

    return (
        <div className="row ">
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                                onChange={handleInputOnChange}
                                onKeyDown={handleInputKeyDown}
                                autoFocus
                                value={tempValue}
                            />
                        </div>
                    </div> :
                    <>
                        <div className="column five wide " onDoubleClick={handleDivDoubleClick}>
                            <h2 className={"font-bench  text-center bg-purple-300 border border-gray-200 dark:bg-cyan-700 border border-gray-200  " + (completedState ? " text-green-600 " : " ")}>{value}</h2>
                        </div>


                        <div className="column one wide ">
                            <button
                                className={"ui button rectangular icon " + (completedState ? " blue " : " green ")}
                                onClick={handleButtonClick}
                            >
                                <i className="white check icon"></i></button>
                        </div>
                        <div className="column two wide">
                            <button onClick={removeTodoItemProp} className="ui button rectangular icon red"><i className="white remove icon"></i></button>
                        </div>
                    </>
            }
        </div>
    );
};

export default Todo;