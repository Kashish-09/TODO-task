// backend/controllers/todoController.js
const db = require('../config/db'); // PostgreSQL client

// Get all todos
const getTodos = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM todos WHERE user_id = $1', [req.user.id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  const { text } = req.body;
  try {
    const newTodo = await db.query(
      'INSERT INTO todos (user_id, text) VALUES ($1, $2) RETURNING *',
      [req.user.id, text]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  try {
    const result = await db.query(
      'UPDATE todos SET text = $1, completed = $2 WHERE id = $3 AND user_id = $4 RETURNING *',
      [text, completed, id, req.user.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Todo not found or unauthorized' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      'DELETE FROM todos WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, req.user.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Todo not found or unauthorized' });
    }
    res.json({ msg: 'Todo deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
