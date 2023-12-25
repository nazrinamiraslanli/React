import React from "react";

function Decriment({setCount }) {
  return (
    <button
      onClick={() => {
        setCount((count) => count - 1);
      }}
    >
      DecrementBnt
    </button>
  );
}

export default Decriment;
