import React, { useState } from "react";
import "../../asset/styles/toggle.scss";

const Toggle = ({ toggle, setToggle, handleToggle, trueText, falseText }) => {
  const handleCheckbox = (event) => {
    setToggle(!toggle);
    handleToggle();
  };
  return (
    <div className="sort">
      <label className="alphabetical-sort-switch">
        <input type="checkbox" onChange={handleCheckbox} />
        <span className="slider round">{toggle ? trueText : falseText}</span>
      </label>
    </div>
  );
};

export default Toggle;
