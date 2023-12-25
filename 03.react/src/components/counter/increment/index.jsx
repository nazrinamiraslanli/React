import React from "react";

function Increment({setCount}) {
  return (
    <button onClick={() => setCount((count) => count + 1)}>IncrementBtn</button>
  );
}

export default Increment;
