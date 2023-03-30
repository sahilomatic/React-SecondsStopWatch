import "./styles.css";
import { useState } from "react";

export default function App() {
  const [second, setTime] = useState(0);
  const [inetrvalId, setinetrvalId] = useState(0);
  const [pauseFlag, setPause] = useState(false);

  const start = () => {
    run();

    let id = setInterval(() => {
      run();
    }, 100);
    setinetrvalId(id);
  };

  let seconds = pauseFlag ? second : 0;
  const run = () => {
    seconds = seconds + 1;
    setTime(seconds);
  };

  const pause = () => {
    setPause(true);
    clearInterval(inetrvalId);
  };
  const reset = () => {
    setTime(0);
    clearInterval(inetrvalId);
    setinetrvalId(null);
  };

  return (
    <div className="App">
      <div>{second}</div>
      <div>
        <button
          onClick={() => {
            start();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            pause();
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>{" "}
    </div>
  );
}
