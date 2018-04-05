# TasktrackerSpa

Design details:

* A user must register first in order to be able to sign in to the App
* When a registered user logs in to the application he'll be able to view a link to create a new task and will be able to see list of all tasks available and will be able to edit and delete the tasks that already exist.
* A user can create a new task by entering a title, description, time to be spent on a task and will be able to select a user from a drop down to whom the task is to be assigned. The list in the drop down consists a list of names of all registered users including the name of the current user.
* A user can edit a task and may mark the task completed or can mark an already completed task to incomplete if he feels more work needs to be done for that particular task.
* A user is entitled to delete any task assigned to anyone when he feels the task is unnecessary.
* Users are not entitled to delete other users hence they cannot see the list of registered users except when assigning tasks.
* Users are not entitled to refresh or reload the page and doing so will log them out. They can use the log out button to log out.
* When a user logs out he will be redirected to the login page.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
