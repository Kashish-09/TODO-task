require('dotenv').config();  // Load environment variables from .env file

const { Sequelize } = require('sequelize');

// Set up the Sequelize instance and database connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,  // Disable SQL query logging (optional)
});
// sequelize.query('SELECT * FROM user')
//   .then(([results, metadata]) => {
//     console.log(results); // Handle query results
//   })
//   .catch(err => {
//     console.error('Error executing query:', err);
//   });
// sequelize.query('SELECT * FROM your_table', { type: sequelize.QueryTypes.SELECT })
//   .then(results => {
//     console.log(results);
//   })
//   .catch(err => {
//     console.error('Error querying the database:', err);
//   });

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = { sequelize };
