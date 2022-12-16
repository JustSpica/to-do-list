/* eslint-disable react/jsx-no-bind */
import { ReactNode, useState } from "react";
import { Trash } from "phosphor-react";

import { Checkbox } from "./Checkbox";

export interface TaskProps {
  children: string | ReactNode;
}

export function Task({ children }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleCheckbox() {
    setIsChecked(prevState => !prevState);
  }

  return (
    <div className="w-full p-4 flex items-start bg-gray-500 border border-gray-400 rounded-lg">
      <Checkbox checked={isChecked} onChecked={handleToggleCheckbox} />
      <span className="mx-3 flex-1 text-sm text-gray-100 leading-relaxed">
        {children}
      </span>
      <button type="button">
        <Trash size={20} />
      </button>
    </div>
  );
}
