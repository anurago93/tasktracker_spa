import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props) {

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    };
    props.dispatch(action);
  }

  function submit(ev) {
    api.submit_task(props.form);
  }

  let users = _.map(props.users, (uu) => <option key={uu.name} value={uu.name}>{uu.name}</option>);
  return <div style={{padding: "4ex"}}>
    <h2>New Task</h2>
    <FormGroup>
      <Input type="text" className="hidden" name="user_id" value={props.form.user_id} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="name">Assign To</Label>
      <Input type="select" name="name" value={props.form.name} onChange={update}>
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
    <Link to="/" className="btn btn-primary" onClick={submit} >Create Task</Link> &nbsp;
    <Link to="/" className="btn btn-primary btn-danger cancel">Cancel</Link> &nbsp;
  </div>;
}

function state2props(state) {
  return {
    form: state.form,
    users: state.users,
  };
}

export default connect(state2props)(TaskForm);