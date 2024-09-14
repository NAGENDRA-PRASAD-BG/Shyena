import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, startEditTodo }) {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
