import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useTimer = (
  seconds: number
): [number, Dispatch<SetStateAction<number>>] => {
  const [timer, setTimer] = useState(seconds);

  useEffect(() => {
    if (timer) {
      const timer = setInterval(() => setTimer((count) => count - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timer]);

  return [timer, setTimer];
};

export default useTimer;
