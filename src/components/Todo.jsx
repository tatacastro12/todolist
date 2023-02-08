import React from "react";
import react, { useState } from "react";

const Todo = ({title}) => {
    const [Value, setvalue] =useState(title)
    const [isEditing, setIsEditing] = useState(false);
    const handledivdubleclick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keycode;
        if (key === 13 || key === 27) {
            setIsEditing(false);
        }
    };

    return (
        isEditing ?
            <div className="row" onDoubleClick={handledivdubleclick}>
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input onChange={handleInputOnChange}
                        onKeyDown={handleInputKeyDown}
                        autoFocus={true}
                        value={Value}
                        />
                    </div>
                </div>
            </div> :
            <div className="row" onDoubleClick={handledivdubleclick}>
                <div className="column five wide">
                    <h1>{Value}</h1>
                </div>
                <div className="column two wide">
                    <button className="ui button circular icon green"><i className="white check icon"></i>
                    </button>
                </div>
                <div className="column two wide">
                    <button className="ui button circular icon red"><i className="white remove icon"></i>
                    </button>
                </div>
            </div>
    );
};

export default Todo;
