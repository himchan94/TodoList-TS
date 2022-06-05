import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

const activeStyle = {
  fontWeight: 'bold',
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksProps = { tasks, setTasks };

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
        <Route path="/" element={<ListScreen {...tasksProps} />} />
        <Route path="/focus" element={<FocusScreen {...tasksProps} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
