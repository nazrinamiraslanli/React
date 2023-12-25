import React, { useState } from "react";

function Input({ count, setCount }) {
    const[value,setValue]=useState(0)
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
      <button
        onClick={() => {
          setCount(count + value);
        }}
      >
        Inc By Value
      </button>
    </div>
  );
}

export default Input;
