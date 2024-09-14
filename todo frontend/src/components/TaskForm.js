import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, editingTodo, updateTodo, setEditingTodo }) {
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTodoText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      updateTodo({ ...editingTodo, text: todoText });
    } else {
      addTodo(todoText);
    }
    setTodoText('');
    setEditingTodo(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <button type="submit" className="btn btn-primary mt-2">
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
}

export default TodoForm;
