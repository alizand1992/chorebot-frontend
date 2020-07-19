import React, { Suspense } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import TopMenu from './components/TopMenu';
import Loading from './components/Common/Loading';

function App() {
  const SignIn = React.lazy(() => import('./components/User/SignIn'));
  const SignUp = React.lazy(() => import('./components/User/SignUp'));
  const Form = React.lazy(() => import('./components/Task/Form'));
  const Task = React.lazy(() => import('./components/Task'));

  return (
    <div className="App">
      <Router>
        <TopMenu />
        <br />
        <Switch>
          <Route path="/user/sign_in">
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          </Route>
          <Route path="/user/sign_up">
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          </Route>
        </Switch>
      </Router>
      <br /><br />
      <Suspense fallback={<Loading />}>
        <Form />
      </Suspense>
      <br />
      <Suspense fallback={<Loading />}>
        <Task />
      </Suspense>
    </div>
  );
}

export default App;
