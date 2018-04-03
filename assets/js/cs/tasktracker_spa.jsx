import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Feed from './feed';
import TaskForm from './task-form';
import EditTaskForm from './edit-task-form';
import RegisterForm from './registration-form';

export default function tasktracker_spa_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <Tasktracker_spa state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}

let Tasktracker_spa = connect((state) => state)((props) => {

  if(props.token){
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact={true} render={() =>
            <div>
              <EditTaskForm />
              <Feed tasks={props.tasks} />
            </div>
          } />
          <Route path="/task" exact={true} render={() =>
            <TaskForm />
          } />
        </div>
      </Router>
    );
  }
  else
  { 
    return (
      <Router>
        <div>
          <Nav />
          <h4 className="msg"> Please login if returning user or register if new user</h4>
          <Route path="/register" exact={true} render={() =>
            <RegisterForm />
          } />
        </div>
      </Router>
    );
  }
});