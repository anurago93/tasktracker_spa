import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import api from '../api';

function EditTaskForm(props) {

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_EDITFORM',
      data: data,
    };
    props.dispatch(action);
  }

  function submit(ev) {
    api.edit_task(props.editform, props.editform.id);
    props.dispatch({
      type: 'CLEAR_EDITFORM',
    });
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_EDITFORM',
    });
  }

  if(props.editform.title != "") {
  let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.name}>{uu.name}</option>);
  return <div style={{padding: "4ex"}}>
    <h2>Edit Task</h2>
    <Form onSubmit={submit}>
    <FormGroup>
      <Input type="hidden" name="user_id" value={props.editform.user_id} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="name">Assign To</Label>
      <Input type="select" name="name" value={props.editform.name} onChange={update}>
        {users}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" value={props.editform.title} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" value={props.editform.description} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="time">Time Spent</Label>
      <Input type="number" min="0" step="15" name="time" value={props.editform.time} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="completed">Completed</Label>
      <Input type="select" name="completed" value={props.editform.completed} onChange={update}>
        <option>No</option>
        <option>Yes</option>
      </Input>   
    </FormGroup>
    <FormGroup>
    <Button type="submit" color="primary">Edit Task</Button> &nbsp;
    <Button className="btn btn-danger"onClick={clear}>Cancel</Button>
    </FormGroup>
    </Form>
  </div>;
  }
  else
  {
    return <div></div>;
  }
}

function state2props(state) {
  return {
    editform: state.editform,
    users: state.users,
  };
}

export default connect(state2props)(EditTaskForm);
