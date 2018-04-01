defmodule TasktrackerSpa.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :title, :string
    field :completed, :string
    field :description, :string
    field :time, :integer, default: 0
    belongs_to :user, TasktrackerSpa.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :user_id, :description, :time, :completed])
    |> validate_required([:title, :user_id, :description, :time])
  end
end
