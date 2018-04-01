defmodule TasktrackerSpa.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :string, null: false
      add :description, :text, null: false
      add :time, :integer
      add :completed, :string
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:tasks, [:user_id])
  end
end