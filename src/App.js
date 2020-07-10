import React from 'react';
import TopMenu from './components/TopMenu';
import Form from './components/Task/Form';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <br />
      <Form />
      <Task />
    </div>
  );
}

export default App;
