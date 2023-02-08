import React, { useState } from 'react'
import Form from "./components/Form";
import Section from "./components/Section";
import List from './components/List';


const Apptitle = "to-do-App";

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

  return (
    <div className='ui container center aligned'>
      <></>
      <Section>
        <h1>
          {Apptitle}
        </h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
      <List list={todoList} />
    </Section>
    </div>
  )
}

export default App