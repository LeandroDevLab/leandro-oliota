import { useState, useEffect } from "react";

function Counter({ target, step = 1, suffix = "", variant, time }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= target) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        return next >= target ? target : next;
      });
    }, time);

    return () => clearInterval(interval);
  }, [count, target, step, time]);

  return (
    <span className={variant}>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;
