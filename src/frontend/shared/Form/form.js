import React, { Component } from "react";

export const Form = ({ value,placeholder }) => {
  return (
    <div>
      <form>
        <input type="text" onChange={value} placeholder={placeholder} />
      </form>
    </div>
  );
};
