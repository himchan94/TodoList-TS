import React, { useState } from 'react';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

const activeStyle = {
  fontWeight: 'bold',
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [focusedTaskId, setFocusedTaskId] = useState<string | null>(null);

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  const shuffleFocusedTask = () => {
    setFocusedTaskId(
      shuffle(tasks.filter((task) => !task.isComplete))[0]?.id ?? null
    );
  };

  const addTask = (task: Pick<Task, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, isComplete: false },
    ]);

    if (!focusedTaskId) setFocusedTaskId(id);
  };

  const tasksApi = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? activeStyle : { fontWeight: 'normal' }
          }
        >
          List
        </NavLink>{' '}
        -{' '}
        <NavLink
          to="focus"
          style={({ isActive }) =>
            isActive ? activeStyle : { fontWeight: 'normal' }
          }
        >
          Focus
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ListScreen {...tasksApi} />} />
        <Route path="/focus" element={<FocusScreen {...tasksApi} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
