import React, { useState, useEffect } from "react";


function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
 useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);
 useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
const addTask = () => {
    if (task.trim() === "") {
      alert("Enter a task");
      return
    }
    setTasks([...tasks, task]);
    setTask("");
    console.log("hi")
  };

  
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">To-Do List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-muted text-center">No tasks yet...</p>
      ) : (
        <ul className="list-group">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;