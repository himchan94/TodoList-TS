import React from 'react';
import { TaskProps } from '../types';

type Props = TaskProps & {};

const FocusScreen: React.FC<Props> = ({ tasks }) => {
  const task = tasks[0];
  return task ? <div>{task.label}</div> : <div>No Task</div>;
};

export default FocusScreen;
