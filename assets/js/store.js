import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/*
 *  state layout:
 *  {
 *   tasks: [... tasks ...],
 *   users: [... Users ...],
 *   form: {
 *     user_id: null,
 *     body: "",
 *   }
 * }
 *
 * */

function tasks(state = [], action) {
  switch (action.type) {
  case 'POSTS_LIST':
    return [...action.tasks];
  case 'ADD_POST':
    return [action.task, ...state];
  default:
    return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
  case 'USERS_LIST':
    return [...action.users];
  case 'REGISTER_USER':
    return [action.user, ...state];
  default:
    return state;
  }
}

let empty_form = {
  title: "",
  description: "",
  time: 0,
  token: "",
  completed: "No",
  name: "",
};

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
    default:
      return state;
  }
}

let empty_editform = {
  title: "",
  description: "",
  time: 0,
  token: "",
  completed: "No",
  name: "",
};

function editform(state = empty_editform, action) {
  switch (action.type) {
    case 'UPDATE_EDITFORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_EDITFORM':
      return empty_editform;
    case 'SET_EDITTOKEN':
      return Object.assign({}, state, action.token);
    default:
      return state;
  }
}

function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}

let empty_login = {
  name: "",
  pass: "",
};

function login(state = empty_login, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  // {tasks, users, form} is ES6 shorthand for
  // {tasks: tasks, users: users, form: form}
  let reducer = combineReducers({tasks, users, form, token, login, editform});
  let state1 = reducer(state0, action);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;