import React from 'react';

function TodoItem({ todo, deleteTodo, startEditTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.text}
      <div>
        <button
          className="btn btn-info btn-sm me-2"
          onClick={() => startEditTodo(todo)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
