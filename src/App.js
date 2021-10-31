import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import Section from './components/Section';
import apis from './apis';

const appTitle = 'TodoList App';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await apis.get("/todos");
      setTodoList(data);
    }

    fetchData();
  }, [])

  const addTodo = async (item) => {
    const { data } = await apis.post("/todos", item);
    setTodoList(oldList => [...oldList, data]);
  }

  const removeTodo = async (id) => {
    await apis.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  }

  const editTodo = async (id, item) => {
    await apis.put(`/todos/${id}`, item);
  }

  return <div className="ui container center aligned">
    <Section>
    <h1>{appTitle}</h1>
    </Section>
    <Section>
      <Form addTodo={addTodo} />
    </Section>
    <Section>
      <List
        editTodoListProp={editTodo}
        removeTodoListProp={removeTodo}
        list={todoList}
      />
    </Section>
  </div>
}

export default App;
