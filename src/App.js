import React, { Suspense } from 'react';
import TopMenu from './components/TopMenu';

function App() {
  const Form = React.lazy(() => import('./components/Task/Form'));
  const Task = React.lazy(() => import('./components/Task'));

  return (
    <div className="App">
      <TopMenu />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Form />
      </Suspense>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Task />
      </Suspense>
    </div>
  );
}

export default App;
