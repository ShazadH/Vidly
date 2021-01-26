import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = ` ${name} has clicked ${count} times!  `;

    return () => {
      console.log("cleanup");
    };
  });

  return (
    <React.Fragment>
      <div>
        {name} have clicked {count} times!!!!!{" "}
      </div>
      <input onChange={(e) => setName(e.target.value)}></input>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Button</button>
    </React.Fragment>
  );
};

export default Counter;
