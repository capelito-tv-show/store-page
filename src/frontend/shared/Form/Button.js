import React from "react";
import { Link } from "react-junctions";

export const Button = ({ handleSubmit, link }) => {
  return (
    <button onClick={handleSubmit}>
      <Link href={link}>送信</Link>
    </button>
  );
};
