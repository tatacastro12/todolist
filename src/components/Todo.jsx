import React from "react";
import  react , { useState }  from "react" ;

const Todo = () => {
    const [ isEditing , setIsEditing ] = useState ( false ) ;
    const handledivdubleclick = ( ) => {setIsEditing ( true ) ;
} ;

    return (
        isEditing?
        <input/> :
            <div className="row" ondoubleclick = { handledivdubleclick }>
                <div className="column five wide">
                    <h1>Test</h1>
                </div>
            <div className="column two wide">
                <button className= "ui button circular icon green"><i className="white check icon"></i></button>
            </div>
            <div className="column two wide">
                <button className= "ui button circular icon red"><i className= "white remove icon"></i></button>
            </div>
            </div>
    );
};

export default Todo;
