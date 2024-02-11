import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Topbar from './componants/Topbar';
import Todolist from './componants/Todolist';
import CreateToDoList from './componants/CreateToDoList';
import EditToDoList from './componants/EditToDoList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/create" element={<CreateToDoList />} />
          <Route path="/edit/:id" element={<EditToDoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
