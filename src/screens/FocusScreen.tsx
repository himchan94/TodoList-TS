import React from 'react';
import { TaskProps } from '../types';

type Props = TaskProps & {};

const FocusScreen: React.FC<Props> = ({ tasks, updateTaskCompletion }) => {
  const task = tasks.filter((task) => !task.isComplete)[0];

  const handleMarkCompleted = () => {
    updateTaskCompletion(task.id, true);
  };

  return task ? (
    <div>
      <div>{task.label}</div>
      <button onClick={handleMarkCompleted}>mark completed</button>
    </div>
  ) : (
    <div>No incomplete task yet</div>
  );
};

export default FocusScreen;
