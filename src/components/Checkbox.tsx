import React, { InputHTMLAttributes } from "react";
import { Check } from "phosphor-react";
import classnames from "classnames";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onChecked: () => void;
}

export function Checkbox({ checked, onChecked, ...props }: CheckboxProps) {
  return (
    <>
      <input
        className="appearance-none "
        type="checkbox"
        checked={checked}
        {...props}
      />
      <button
        type="button"
        onClick={onChecked}
        className={classnames(
          "w-[18px] h-[18px] flex items-center justify-center text-gray-100 border-sky-500 border-2 rounded-full cursor-pointer focus:outline-none",
          {
            "bg-indigo-400 border-indigo-400": checked,
          },
        )}
      >
        {checked && <Check size={12} weight="bold" />}
      </button>
    </>
  );
}
