import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function RegisterForm(props) {
  console.log("props@RegisterForm", props);

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    console.log(tgt.val());
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    };
    console.log(action);
    props.dispatch(action);
  }

  function submit(ev) {
    var reg_form = {name: props.form.name, password: props.form.password}
    api.register_user(reg_form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  return <div style={{padding: "4ex"}}>
    <h2>Register</h2>
    <FormGroup>
      <Label for="name">Enter the user name</Label>
      <Input type="text" name="name" value={props.form.name} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="password">Enter your password</Label>
      <Input type="password" name="password" value={props.form.password} onChange={update} />
    </FormGroup>
    <Button onClick={submit} color="primary">Register</Button> &nbsp;
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  console.log("rerender@RegisterForm", state);
  return {
    form: state.form,
    users: state.users,
  };
}

export default connect(state2props)(RegisterForm);