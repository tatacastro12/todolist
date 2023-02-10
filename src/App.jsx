import React, { useState, useEffect } from 'react'
import Form from "./components/Form";
import Section from "./components/Section";
import List from './components/List';
import todos from "./api/index";




const Apptitle = "to do list";



const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }

    fetchData();
  }, []);

  const addTodo = async(item) => {
    const {data} = await todos.post("/todos", item);
    setTodoList((oldlist) => [...oldlist, data]);
  };
  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => {
      oldList.filter((item) => item.title !== id);
    });
  };
  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
}
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
          editTodoListProp={editTodo}
        />
      </Section>
    </div>
    </div>
    </div>
  )
}

export default App