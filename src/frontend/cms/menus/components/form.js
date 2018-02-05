import React, { Component } from "react";

function childForm({value}) {
    return (
      <div className="FormBox">
        <div className="wrapper">
          <input
            type="text"
            placeholder={value}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    );
}

export childForm;
