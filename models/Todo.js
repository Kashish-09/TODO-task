const { DataTypes } = require('sequelize');
const db = require('../config/db');  // Assuming you have a separate db config file for Sequelize

// Define the Todo model
const Todo = db.sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Automatically increment the id
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,  // Title is required
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,  // Description is optional
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,  // By default, todos are not completed
  },
});

// Sync the model with the database (create the table if it doesn't exist)
Todo.sync()
  .then(() => console.log('Todo table has been created if it doesn\'t exist'))
  .catch(err => console.log('Error creating Todo table: ', err));

module.exports = Todo;
