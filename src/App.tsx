import todoLogo from "assets/svg/todo-logo.svg";

import { Form } from "components/Form";
import { Task } from "components/Task";

export function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-600">
      <header className="w-full py-20 flex items-center justify-center bg-gray-700">
        <img src={todoLogo} className="text-sky-500" alt="" />
      </header>
      <section className="w-full flex-1 flex justify-center">
        <main className="w-full h-full flex flex-col max-w-[736px]">
          <Form />
          <section className="w-full flex flex-col flex-1">
            <header className="w-full py-6 flex justify-between border-b border-b-gray-400">
              <div className="space-x-2">
                <span className="font-bold text-sky-500">Tarefas criadas</span>
                <span className="px-2 py-[0.175rem] text-xs bg-gray-400 text-gray-200 rounded-full">
                  0
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-bold text-indigo-400">Concluídas</span>
                <span className="px-2 py-[0.175rem] text-xs bg-gray-400 text-gray-200 rounded-full">
                  0
                </span>
              </div>
            </header>
            <section className="w-full py-4 flex-1 space-y-3">
              <Task>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </Task>
              <Task>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </Task>
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}
