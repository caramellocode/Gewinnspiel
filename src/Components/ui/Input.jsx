import React from "react";

const Input = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="border rounded p-2 w-full"
    />
  );
};

export { Input };

