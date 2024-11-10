const { sequelize } = require('./config/db'); // Ensure this path is correct

// Test the query
sequelize.query('SELECT NOW()', { type: sequelize.QueryTypes.SELECT })
  .then(result => {
    console.log('PostgreSQL server time:', result);
  })
  .catch(err => {
    console.error('Error executing query:', err);
  });
