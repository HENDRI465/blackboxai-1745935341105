import React, { useState, useEffect } from 'react';

const CountdownFlashSale = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="bg-neonPurple text-black rounded-lg p-4 mt-12 max-w-4xl mx-auto text-center font-semibold text-xl">
      <span>Flash Sale ends in: </span>
      <span>{timeLeft.days}d </span>
      <span>{timeLeft.hours}h </span>
      <span>{timeLeft.minutes}m </span>
      <span>{timeLeft.seconds}s</span>
    </div>
  );
};

export default CountdownFlashSale;
