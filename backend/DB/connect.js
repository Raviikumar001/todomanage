const Pool= require('pg').Pool;
const retry = require('retry');
require('dotenv').config();

const connectionString = process.env.DB_URL;
const pool = new Pool({
  connectionString,
});








const createTasksTable = async () => {
    try {
      // Check if table exists:
      const client = await pool.connect();
  
  
      const checkResult = await client.query("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'tasks')");
      if (checkResult.rows[0].exists) {
        console.log('Tasks table already exists');
        return; 
      }
  
      const sqlQuery = `
        CREATE TABLE tasks (
          id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
          title VARCHAR(512) NOT NULL, 
          description TEXT, 
          completed BOOLEAN NOT NULL DEFAULT false
        );
      `
      await client.query(sqlQuery);
      console.log('Tasks table created successfully!');
    } catch (err) {
      console.error('Error creating table:', err);
    }
  };

  const connectDB = () => {
    const operation = retry.operation({
      retries: 5,
      minTimeout: 4000,
      randomize: true,
    });
  
    operation.attempt(async (currentAttempt) => {
      try {
        const client = await pool.connect();
  
        try {
          console.log('Connected to the database');
          const result = await client.query('SELECT version()');
          console.log(result.rows[0]);
          await createTasksTable(); 
        } finally {
          client.release();
        }
  
      } catch (err) {
        if (operation.retry(err)) {
          console.warn(`Failed to connect on attempt ${currentAttempt}, retrying...`);
        } else {
          console.error('Failed to connect to the database after multiple attempts:', err);
        }
      }
    });
  };



  


module.exports =  {connectDB, pool}; 









