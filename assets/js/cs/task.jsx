import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Button } from 'reactstrap';
import api from '../api';

function Task(params) {

	function edit(ev) {
	    let action = {
	      type: 'UPDATE_EDITFORM',
	      data: params.task,
	    };
	    params.dispatch(action);
	}

	function delete_task(ev) {
		var result = confirm("Are you sure?");
		if(result){
			api.delete_task(params.task.id);
		}	    
	}

  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p><b>Assigned To:</b> { task.name } </p>
        <p><b>Title:</b> { task.title }</p>
        <p><b>Description:</b> { task.description }</p>
        <p><b>Time Spent:</b> { task.time } minutes</p>
        <p><b>Completed:</b> { task.completed } </p>
        <Button className="btn btn-default btn-danger" onClick={delete_task}>Delete</Button> &nbsp;
        <Button onClick={edit} color="primary">Edit</Button> &nbsp;
      </div>
    </CardBody>
  </Card>;
}

function state2props(state) {
  return {
    editform: state.editform,
    users: state.users,
  };
}

export default connect(state2props)(Task);