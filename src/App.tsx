import React, { useState } from "react";

import todoLogo from "assets/svg/todo-logo.svg";

import { Form } from "components/Form";
import { Task } from "components/Task";

interface TasksProps {
  id: number;
  description: string;
  status: "done" | "inProgress";
}

export function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const completedTasks = tasks.filter(task => task.status === "done");

  function handleToggleTask(idTask: number, isChecked: boolean) {
    const taskIndex = tasks.findIndex(task => task.id === idTask);

    const newTasks = [...tasks];
    newTasks[taskIndex].status = isChecked ? "done" : "inProgress";

    setTasks(newTasks);
  }

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const taskField = event.currentTarget.elements.namedItem(
      "task",
    ) as HTMLInputElement;

    const newTask: TasksProps = {
      id: Math.round(Math.random() * 100000),
      description: taskField.value,
      status: "inProgress",
    };

    setTasks(prevState => [...prevState, newTask]);
  }

  function handleDeleteTask(idTask: number) {
    const tasksWithoutTaskDeleted = tasks.filter(task => task.id !== idTask);

    setTasks(tasksWithoutTaskDeleted);
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-600 overflow-y-auto">
      <header className="w-full py-20 flex items-center justify-center bg-gray-700">
        <img className="text-sky-500" src={todoLogo} alt="" />
      </header>
      <section className="w-full flex-1 flex justify-center">
        <main className="w-full max-w-[736px] h-full flex flex-col">
          <Form onSubmit={handleCreateTask} />
          <section className="w-full flex flex-col flex-1">
            <header className="w-full py-6 flex justify-between border-b border-b-gray-400">
              <div className="space-x-2">
                <span className="font-bold text-sky-500">Tarefas criadas</span>
                <span className="px-2 py-[0.175rem] text-xs bg-gray-400 text-gray-200 rounded-full">
                  {tasks.length}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-bold text-indigo-400">Concluídas</span>
                <span className="px-2 py-[0.175rem] text-xs bg-gray-400 text-gray-200 rounded-full">
                  {completedTasks.length} de {tasks.length}
                </span>
              </div>
            </header>
            <section className="w-full py-4 flex-1 space-y-3">
              {tasks.map(task => (
                <Task
                  key={task.id}
                  idTask={task.id}
                  onDone={handleToggleTask}
                  onDelete={handleDeleteTask}
                >
                  {task.description}
                </Task>
              ))}
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}
