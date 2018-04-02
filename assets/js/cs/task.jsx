import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Button } from 'reactstrap';
import api from '../api';

function Task(params) {

	function edit(ev) {
	    api.submit_task(props.form);
	    console.log(props.form);
	}

	function delete_task(ev) {
	    api.delete_task(params.task.id);
	}

  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p><b>Assigned To:</b> { task.user.name } </p>
        <p><b>Title:</b> { task.title }</p>
        <p><b>Description:</b> { task.description }</p>
        <p><b>Time Spent:</b> { task.time } minutes</p>
        <p><b>Completed:</b> { task.completed } </p>
        <Button onClick={delete_task} color="primary">Delete</Button> &nbsp;
        <Button onClick={edit} color="primary">Edit</Button> &nbsp;
      </div>
    </CardBody>
  </Card>;
}

function state2props(state) {
  console.log("rerender@TaskForm", state);
  return {
    form: state.form,
    users: state.users,
  };
}

export default connect(state2props)(Task);