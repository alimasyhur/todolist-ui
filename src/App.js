import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Section from './components/Section';

const appTitle = 'TodoList App';

const list = [
  {
    id: 1,
    title: "Test #1",
    complted: false
  },
  {
    id: 2,
    title: "Test #2",
    complted: false
  },
  {
    id: 3,
    title: "Test #3",
    complted: false
  },
  {
    id: 4,
    title: "Test #4",
    complted: false
  },
  {
    id: 5,
    title: "Test #5",
    complted: false
  }
];

function App() {
  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) => {
    setTodoList(oldList => [...oldList, item]);
  }

  const removeTodo = (id) => {
    setTodoList((oldList) => oldList.filter((item) => item.id !== id));
  }

  return <div className="ui container center aligned">
    <Section>
    <h1>{appTitle}</h1>
    </Section>
    <Section>
      <Form addTodo={addTodo} />
    </Section>
    <Section>
      <List removeTodoListProp={removeTodo} list={todoList} />
    </Section>
  </div>
}

export default App;
