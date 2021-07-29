import React, {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")      
  const [tasks, setTasks] = useState([])  
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")

  const addTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("Task Empty")
      return
    }
    
    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const editTask = (eTask) => {
    setTask(eTask.name)
    setId(eTask.id)
    setEditMode(true)
  }

  const updateTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("Task Empty")
      return
    }
    
    const editedTasks = tasks.map(item => item.id === id ? {id, name: task}: item)

    setTasks(editedTasks)
    setEditMode(false)
    setTask("")
    setId("")
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks list</h4>
          {         
            size(tasks) == 0 ? (
              <h5 className="text-center">Don´t find Tasks...</h5>     
            ) : (
              <ul className="list-group">
              {
                tasks.map((task) => (
                  <li className="list-group-item" key={task.id}>
                    <span className="lead">{task.name}</span>
                    <button className="btn btn-danger btn-sm float-right mx-2" onClick={() => deleteTask(task.id)}>Delete</button>
                    <button className="btn btn-warning btn-sm float-right" onClick={() => editTask(task)}>Edit</button>
                  </li>
                ))
              }
              </ul>
            )                           
          }
        </div>
        <div className="col-4">
          <h4 className="text-center">{editMode ? "Edit Task":"Add Task"}</h4>
          <form onSubmit={editMode ? updateTask : addTask}>
            <input
              id="inTask"
              type="text"
              className="form-control mb-2"
              placeholder="Enter task..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button 
              className={editMode ? "btn btn-warning btn-block" : "btn btn-success btn-block" }
              type="submit"      
                > {editMode ? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
