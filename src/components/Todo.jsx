<<<<<<< HEAD
import React, { useState } from "react"; const Todo = ({ title, completed, removeTodoItemProp }) => {
=======
import React, { useState } from "react";
const Todo = ({ title, completed, removeTodoItemProp }) => {
>>>>>>> d9d8e6b3446dcbf47049bb4f6be061f69e645010
    const [isEditing, setIsEditing] = useState(false);
    const [Value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title);

    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => { 
        setIsEditing(true);
    };
<<<<<<< HEAD
    const handleInputKeyDown= (e) => {
        const key =e.keyCode;
       
         if (key === 13) {
=======
    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if (key === 13) {
>>>>>>> d9d8e6b3446dcbf47049bb4f6be061f69e645010
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(Value);
            setIsEditing(false);
        }
    };
<<<<<<< HEAD
    const handleInputOnChange = (e) => { setTempValue(e.target.value); };
    const handleButtonClick = () => { setCompleted((oldcompleted) => !oldcompleted);
     };

     return (
        <div className="row" onDoubleClick={handleDivDoubleClick}>
=======

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClick = () => {
        setCompleted((oldCompleted) => !oldCompleted);
    };

    return (
        <div className="row">
>>>>>>> d9d8e6b3446dcbf47049bb4f6be061f69e645010
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                                onChange={handleInputOnChange}
                                onKeyDown={handleInputKeyDown}
                                autoFocus={true}
                                value={tempValue}
                            />
                        </div>
                    </div> :
                    <>
<<<<<<< HEAD
                        <div className="column five wide">
                            <h1 className={"ui header"+(completedState? "green": "")}>{Value}</h1>
                        </div>
                        <div className="column two wide">
                            <button 
                            className="ui button circular icon green"
                            onClick={handleButtonClick}
=======
                        <div className="column five wide" onDoubleClick={handleDivDubleClick}>
                            <h2 className={"ui header" + (completedState ? " green " : " ")}>{Value}</h2>
                        </div>


                        <div className="column one wide">
                            <button
                                className={"ui button circular icon" + (completedState ? " blue " : " green ")}
                                onClick={handleButtonClick}
>>>>>>> d9d8e6b3446dcbf47049bb4f6be061f69e645010
                            >
                                <i className="white check icon"></i></button>
                        </div>
                        <div className="column two wide">
                            <button onClick={removeTodoItemProp} className="ui button circular icon red"><i className="white remove icon"></i></button>
                        </div>
                    </>
            }
        </div>
    );
};
<<<<<<< HEAD
export default Todo; 
=======

export default Todo;
>>>>>>> d9d8e6b3446dcbf47049bb4f6be061f69e645010
