import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';

const activeStyle = {
  fontWeight: 'bold',
};

function App() {
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
        <Route path="/" element={<ListScreen />} />
        <Route path="/focus" element={<FocusScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
