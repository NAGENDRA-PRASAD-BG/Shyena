// import React, { useState } from 'react';
// import TodoForm from './components/TaskForm';
// import TodoList from './components/TodoList';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [editingTodo, setEditingTodo] = useState(null);

//   const addTodo = (todo) => {
//     setTodos([...todos, { id: Date.now(), text: todo }]);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const startEditTodo = (todo) => {
//     setEditingTodo(todo);
//   };

//   const updateTodo = (updatedTodo) => {
//     setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
//     setEditingTodo(null);
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">To-Do List</h1>
//       <TodoForm
//         addTodo={addTodo}
//         editingTodo={editingTodo}
//         updateTodo={updateTodo}
//         setEditingTodo={setEditingTodo}
//       />
//       <TodoList
//         todos={todos}
//         deleteTodo={deleteTodo}
//         startEditTodo={startEditTodo}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TaskForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'http://127.0.0.1:8000/api/tasks/';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (todoText) => {
    try {
      const response = await axios.post(API_URL, { text: todoText });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const startEditTodo = (todo) => {
    setEditingTodo(todo);
  };

  const updateTodo = async (updatedTodo) => {
    try {
      const response = await axios.put(`${API_URL}${updatedTodo.id}/`, updatedTodo);
      setTodos(todos.map(todo => (todo.id === response.data.id ? response.data : todo)));
      setEditingTodo(null);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">To-Do List</h1>
      <TodoForm
        addTodo={addTodo}
        editingTodo={editingTodo}
        updateTodo={updateTodo}
        setEditingTodo={setEditingTodo}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        startEditTodo={startEditTodo}
      />
    </div>
  );
}

export default App;
