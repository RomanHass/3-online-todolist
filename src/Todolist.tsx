import { FilterValuesType } from "./App";
import { Button } from "./Button";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
};

type TodolistType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: number) => void
  changeFilter: (newFilterValue: FilterValuesType) => void
};

export const Todolist = ({title, tasks, removeTask, changeFilter}: TodolistType) => { 

  const tasksList: Array<JSX.Element> = tasks.map((task: TaskType) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} /> 
        <span>{task.title}</span>
        <Button title="x"
                onClickHandler={() => removeTask(task.id)} />
      </li>
    );
  });

  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input />
        <Button title="+" />
      </div>
      <ul>
        {tasksList}
      </ul>
      <div>
        <Button title="All" onClickHandler={() => changeFilter('all')} />
        <Button title="Active" onClickHandler={() => changeFilter('active')} />
        <Button title="Completed" onClickHandler={() => changeFilter('completed')} />
      </div>
    </div>
  );
};