import { useEffect, useState } from "react";

const formatDate = (date) => {
  if (!date) return "";

  const hour = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hour}:${minutes}:${seconds}`;
};

function useClock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    // cleanup
    return () => {
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
