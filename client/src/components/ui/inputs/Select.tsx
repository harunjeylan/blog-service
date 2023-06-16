import React from "react";

type SelectProps = {
  label?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  type?: React.HTMLInputTypeAttribute;
  inputRef?: React.MutableRefObject<HTMLSelectElement | undefined> | undefined;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  name?: string;
  className?: string;
  helperText?: string | string[];
  isError?: boolean;
  placeholder?: string;
  multiple?: boolean;
  children: React.ReactNode | React.ReactNode[];
};
const Select = ({
  label,
  onBlur,
  onChange,
  value,
  name,
  className,
  helperText,
  isError,
  inputRef,
  placeholder,
  children,
  multiple,
}: SelectProps) => {
  return (
    <label className="w-full  flex flex-col">
      {label && <h4 className="text-white font-medium mb-1">{label}</h4>}
      <select
        ref={inputRef as React.MutableRefObject<HTMLSelectElement>}
        multiple={multiple}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`${
          !!isError
            ? "outline-red-600 focus:outline-red-500"
            : "outline-neutral-500 focus:outline-neutral-500 "
        } ${className} outline outline-1 bg-tertiary py-2 px-2 placeholder:text-secondary rounded-md   border-none font-medium focus:outline focus:outline-1 bg-neutral-300 focus:bg-neutral-200 dark:bg-dark-700 dark:focus:bg-dark ease-in-out duration-100`}
      >
        {children}
      </select>
      {!!isError && <p className="text-red-500 px-2">{helperText}</p>}
    </label>
  );
};

export default Select;
