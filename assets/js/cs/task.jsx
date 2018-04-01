import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p>Created by <b>{ task.user.name }</b></p>
        <p><b>Title:</b> { task.title }</p>
        <p><b>Description:</b> { task.description }</p>
        <p><b>Time Spent:</b> { task.time } minutes</p>
        <p><b>Completed:</b> { task.completed } </p>
      </div>
    </CardBody>
  </Card>;
}