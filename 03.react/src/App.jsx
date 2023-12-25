import React, { useState } from "react";
import Decriment from "./components/counter/decrement";
import Increment from "./components/counter/increment";
import Input from "./components/counter/input";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <div>
      <Increment count={count} setCount={setCount} />
      <h2>{count}</h2>
      <Decriment count={count} setCount={setCount} />
      <Input value={value} setValue={setValue} />
    </div>
  );
}

export default App;
