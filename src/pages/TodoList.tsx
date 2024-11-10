import { useState, useEffect } from 'react';
import { getTodos, createTodo } from '../services/todoServices';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const handleCreateTodo = async () => {
    const createdTodo = await createTodo(newTodo.title, newTodo.description);
    setTodos([...todos, createdTodo]);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl mt-8">Todo List</h1>
      <div className="mt-6 flex gap-4">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          className="p-2 border border-gray-300 rounded"
        />
        <button onClick={handleCreateTodo} className="bg-blue-500 text-white p-2 rounded">
          Add Todo
        </button>
      </div>

      <ul className="mt-6 w-full max-w-xl">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
