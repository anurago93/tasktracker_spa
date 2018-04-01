import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props) {
  console.log("props@TaskForm", props);

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
    api.submit_task(props.form);
    console.log(props.form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  return <div style={{padding: "4ex"}}>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="user_id">Assign To</Label>
      <Input type="select" name="user_id" value={props.form.user_id} onChange={update}>
        { users }
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" value={props.form.title} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" value={props.form.description} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="time">Time Spent</Label>
      <Input type="number" min="0" step="15" name="time" value={props.form.time || 0} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="completed">Completed</Label>
      <Input type="select" name="completed" onChange={update}>
        <option>No</option>
        <option>Yes</option>
      </Input>   
    </FormGroup>
    <Button onClick={submit} color="primary">Create Task</Button> &nbsp;
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  console.log("rerender@TaskForm", state);
  return {
    form: state.form,
    users: state.users,
  };
}

export default connect(state2props)(TaskForm);