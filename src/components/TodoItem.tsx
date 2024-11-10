interface TodoItemProps {
  todo: {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className="bg-white p-4 mb-4 rounded shadow">
      <h3 className="text-xl">{todo.title}</h3>
      <p>{todo.description}</p>
      <p className={`text-sm ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
        {todo.completed ? 'Completed' : 'Pending'}
      </p>
    </li>
  );
};

export default TodoItem;
