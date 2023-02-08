import React from 'react'
import Form  from "./components/Form";
 import Section from "./components/Section";
 import List from './components/List';


const Apptitle = "to-do-App";

const App = () => {
  return (
    <div className='ui container center aligned'>
    <></>
      <section>
        <h1>
          {Apptitle}
        </h1>
      </section>
      <section>
         <Form  /> 
        <Section />
        <List />
      </section>
    </div>
  )
}

export default App