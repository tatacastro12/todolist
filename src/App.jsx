import React, { useState, useEffect } from 'react'
import Form from "./components/Form";
import Section from "./components/Section";
import List from './components/List';



const Apptitle = "to do list";

const list = [
  { title: "test #1", completed: false },
  { title: "test #2" },
  { title: "test #3" }
];

const App = () => {
  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
  };

  const removeTodo = async (id) => {
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = (e) => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect((e) => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  
  return (
    <div className='body'>
    <div className='text-center bg-cover bg-no-repeat  bg-[url(https://user-images.githubusercontent.com/116750999/217895729-10a5baf8-52af-4983-8d58-85a8625a540a.jpg)]  dark:bg-[url(https://user-images.githubusercontent.com/116750999/217899197-940cabaa-0cc7-460a-b168-2338e6f7559f.jpg)]  '>
    
      <>
      <button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌚' : '🌝'}
			</button>
      </>
      <div className="max-w-5xl w-11/12 mx-auto">
      <Section>
        <h1 className='text-5xl font-graduate '>
          {Apptitle}
        </h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List list={todoList}
          removeTodoListProp={removeTodo}
        />
      </Section>
    </div>
    </div>
    </div>
  )
}

export default App