const {pool} = require('../DB/connect')


const GetAllTasks = async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM tasks'); 
      const tasks = result.rows; 
      res.status(200).json(tasks); 
      client.release();
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving tasks');
    }
  };

const AddNewTask = async (req, res) => {


    try {
        const { title, description } = req.body; 
        
        const client = await pool.connect(); 
        try { 
            const result = await client.query(
                'INSERT INTO tasks (title, description, completed) VALUES ($1, $2, $3) RETURNING *',
                [title, description, false] 
              );
              const newTask = result.rows[0];
              res.status(200).json({Task:newTask, message:"Task Created Successfully"});
                
        } finally {
          client.release();
        }    
      } catch (err) {
        console.error(err);
        res.status(500).send('Error creating task. Try Again!');
      }




};

const UpdateTask = async (req, res) => {
    try {
      const { id } = req.query; 
      console.log(id, req.query);
      const { completed } = req.body; 
  
      const client = await pool.connect();
      const result = await client.query(
        'UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *',
        [completed, id]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).send('Task not found');
      }
  
      const updatedTask = result.rows[0];
      res.status(200).json({Task:updatedTask, message:"Task Updated Successfully"});
    
      client.release();
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating task');
    }
  };

  const DeleteTask = async (req, res) => {
    try {
      const { id } = req.query; 
     
      const client = await pool.connect();
      const result = await client.query(
        'DELETE FROM tasks WHERE id = $1',
        [id]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).send('Task not found');
      }
      
      res.status(200).json({message:"Task Deleted Successfully"});
      client.release();
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting task');
    }
  };

module.exports = {
    GetAllTasks, AddNewTask, 
    UpdateTask, DeleteTask
}