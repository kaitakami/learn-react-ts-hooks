import { useState } from "react";
import NavTitle from "../components/NavTitle";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavTitle title="Counter - useState hook" />
    <div className="text-left flex flex-col gap-6">
      <br />
      <p className="font-bold text-center">
        The current count is <code>{count}</code>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>How it works:</h3>
      <p>
        The <code>useState</code> hook allows you to add state to functional
        components. State is a way to store and manage data within a component
        that can change over time. In this example, <code>useState</code> is
        called with an initial value of 0. The returned <code>count</code>{" "}
        variable is the current state, and the <code>setCount</code> function is
        used to update the count by passing a new value.
      </p>
      <p>
        When the <code>Increment</code> button is clicked, the function passed
        to the <code>onClick</code> handler is called, which calls{" "}
        <code>setCount(count + 1)</code>. This updates the count and causes the
        component to re-render with the new value.
      </p>
      <br />
      <pre>
        {`
          import { useState } from 'react';

          function Counter() {
          const [count, setCount] = useState(0);

          return (
              <>
              <p>The count is {count}</p>
              <button onClick={() => setCount(count + 1)}>
                  Increment
              </button>
              </>
          );
          }
          `}
      </pre>
    </div>
    </>
  );
};

export default UseState;
