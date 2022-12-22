/* eslint-disable no-unused-vars */
import { ReactNode, useState } from "react";
import classNames from "classnames";
import { Trash } from "phosphor-react";

import { Checkbox } from "./Checkbox";

export interface TaskProps {
  idTask: number;
  children: string | ReactNode;
  onDone: (id: number, checked: boolean) => void;
}

export function Task({ children, idTask, onDone }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleCheckbox() {
    onDone(idTask, !isChecked);

    setIsChecked(prevState => !prevState);
  }

  return (
    <div className="w-full p-4 flex items-start bg-gray-500 border border-gray-400 rounded-lg">
      <Checkbox checked={isChecked} onChecked={handleToggleCheckbox} />
      <span
        className={classNames(
          "mx-3 flex-1 text-sm text-gray-100 leading-relaxed",
          {
            "text-gray-300 line-through": isChecked,
          },
        )}
      >
        {children}
      </span>
      <button type="button">
        <Trash size={20} />
      </button>
    </div>
  );
}
