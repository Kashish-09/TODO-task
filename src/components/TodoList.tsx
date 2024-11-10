// src/components/TodoList.tsx
import React, { useState, useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
}

interface TodoListProps {
  todos: Todo[];
  onAdd: (title: string, description: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    onAdd(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded-md mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <button onClick={handleAdd} className="w-full py-2 bg-blue-500 text-white rounded-md">
        Add Task
      </button>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="p-2 border-b">
            <h3 className="font-semibold">{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
