"use client";
import React from "react";

enum FormInputTypes {
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
}

type InputProps = {
  name: string;
  label: string;
  value?: any;
  onChange?: any;
  placeholder?: string;
  className?: string;
  type?: FormInputTypes;
  fullWidth?: boolean;
};

export const TextInputField = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  fullWidth,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-4 ${fullWidth ? "w-full" : "w-1/2"}`}>
      <label> {label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};
export const PasswordInputField = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  fullWidth,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-4 ${fullWidth ? "w-full" : "w-1/2"}`}>
      <label> {label}</label>
      <input
        type="password"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
