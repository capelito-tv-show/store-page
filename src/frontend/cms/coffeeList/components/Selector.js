import React from "react";
import Select from "react-select";

export const Selector = ({ value, onChange }) => {
  const Rate = [
    { value: "Highest", label: 5 },
    { value: "High", label: 4 },
    { value: "Normal", label: 3 },
    { value: "Low", label: 2 },
    { value: "Lowest", label: 1 }
  ];

  return (
    <Select
      name="form-field"
      value={value}
      onChange={onChange}
      options={Rate}
    />
  );
};

export default Selector;
