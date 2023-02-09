import React, { useState } from "react";
const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    return (
        <form className="ui form " onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned ">
                <div className="row ">
                    <div className="column five wide ">
                        <input 
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter something to do..."
                    
                        />
                    </div>
                    <div className="column one wide  ">
                        <button type="submit" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-slate-600"><h1 className="font-graduate text-sm">Add</h1>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Form;
