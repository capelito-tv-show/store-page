import React, { Component } from "react";

export const Form = ({ value, placeholder, className }) => {
  return (
    <input
      type="text"
      onChange={value}
      placeholder={placeholder}
      className={className}
    />
  );
};
