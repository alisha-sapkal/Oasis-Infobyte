// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleCompletion, deleteTask, editTask }) => {
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-lists">
      <div className="pending-tasks">
        <h2>Pending Tasks</h2>
        {pendingTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        {completedTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
