import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setHistory((prev) => {
      return replace
        ? [...prev.slice(0, prev.length - 1), mode]
        : [...prev, mode];
    });
  }

  function back() {
    setHistory((prev) => {
      return history.length > 1 ? [...prev.slice(0, prev.length - 1)] : prev;
    });
  }

  return { mode: history[history.length - 1], transition, back };
}
