import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <span>{`0${currentDate.getHours()}`.slice(-2)}</span>
      <span>:</span>
      <span>{`0${currentDate.getMinutes()}`.slice(-2)}</span>
    </>
  );
};

export default Clock;
