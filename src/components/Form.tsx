import { PlusCircle } from "phosphor-react";
import { FormHTMLAttributes } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function Form(props: FormProps) {
  return (
    <form className="w-full flex gap-2 -translate-y-6" {...props}>
      <input
        name="task"
        className="flex-1 p-4 bg-gray-500 text-gray-100 border border-gray-700 rounded-lg placeholder:text-gray-300"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className="p-4 flex items-center gap-2 bg-sky-700 text-gray-100 rounded-lg transition-colors hover:bg-sky-500"
        type="submit"
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
