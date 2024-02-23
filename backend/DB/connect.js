const Pool= require('pg').Pool;
require('dotenv').config();
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

console.log(PGHOST, PGDATABASE)
const pool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
      require: true,
    },
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
          title VARCHAR(255) NOT NULL, 
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
      
      async function getPgVersion() {
        const client = await pool.connect();
        try {
            
          const result = await client.query('SELECT version()');
          console.log(result.rows[0]);
          createTasksTable(); 
        } finally {
          client.release();
        }
      }
      getPgVersion();

}

module.exports =  {connectDB, pool}; 









