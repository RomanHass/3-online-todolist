import React, { useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  // BLL
  const todolistTitle: string = "What to learn";

  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "HTML", isDone: true },    
    { id: 2, title: "CSS", isDone: true },    
    { id: 3, title: "JS/TS", isDone: false },    
  ]);

  const removeTask = (taskId: number) => {
    const nextState:Array<TaskType> = tasks.filter(task => task.id !== taskId);
    setTasks(nextState);
  };


  // UI
  const [filter, setFilter] = useState<FilterValuesType>('all');

  let filteredTasks: Array<TaskType> = tasks;

  if (filter === 'active') {
    filteredTasks = tasks.filter(t => !t.isDone);
  }

  if (filter === 'completed') {
    filteredTasks = tasks.filter(t => t.isDone);
  }

  const changeFilter = (newFilterValue: FilterValuesType) => {
    setFilter(newFilterValue);
  };

  return (
    <div className="App">
      <Todolist title={todolistTitle} 
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter} />
    </div>
    
  );
}

export default App;
