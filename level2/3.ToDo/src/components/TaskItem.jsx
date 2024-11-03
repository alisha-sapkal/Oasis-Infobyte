// src/components/TaskItem.jsx
import React, { useState } from 'react';

const TaskItem = ({ task, toggleCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(false);
    if (newText.trim()) editTask(task.id, newText);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input 
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
        />
      ) : (
        <span>
          {task.text} <br />
          <small>Added: {task.addedDate}</small> <br />
          <small>Due: {task.dueDate}</small>
          {task.completed && <small> | Completed: {task.completedDate}</small>}
        </span>
      )}
      <button onClick={() => toggleCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
