// src/components/ToDoApp.jsx
import React, { useState } from 'react';
import TaskList from './TaskList';
import '../index.css';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = () => {
    if (taskText.trim() && dueDate) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        dueDate: dueDate,
        completed: false,
        addedDate: new Date().toLocaleString(),
        completedDate: null,
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
      setDueDate('');
    }
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed, completedDate: task.completed ? null : new Date().toLocaleString() } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <div className="todo-app">
      <h1>To-Do App</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default ToDoApp;
