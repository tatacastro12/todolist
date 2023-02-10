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
                    <button class="font-bench text-xl relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Add</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Form;
