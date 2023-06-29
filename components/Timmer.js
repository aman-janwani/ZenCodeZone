import React, { useEffect, useState } from "react";

const Timmer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [deadline, setDeadline] = useState(""); // [MM, DD, YYYY
  const [lodeadline, setlodeadline] = useState(""); // [MM, DD, YYYY

  //   const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const handleDeadline = () => {
    setDeadline(lodeadline);
    console.log(deadline, "dd");
  };

  return (
    <div className="flex flex-col gap-[15px] p-[20px] text-white">
      <div className="flex items-center justify-between">
        <input
          type="datetime-local"
          name=""
          id=""
          className="p-2 bg-[#ffffff]/90 rounded-[15px] text-[#111111] outline-none hover:brightness-105 cursor-pointer "
          onChange={(e) => {
            setlodeadline(e.target.value);
          }}
        />
        <button onClick={handleDeadline} className="px-5 py-2 rounded-md text-white font-medium bg-blue-500">Start</button>
        {deadline.length > 0 && (
            <button onClick={() => setDeadline("")} className="px-5 py-2 rounded-md text-white font-medium bg-red-500">Stop</button>
        )}
      </div>
        <div className="flex items-start justify-center gap-[5px] text-white"> 
          <p className="flex flex-col gap-[8px] items-center text-[30px] font-semibold">
            {days ? days : "00"}
            <span className="text-[20px]">Days</span>
          </p>
          <p className=" text-[30px] font-semibold">:</p>
          <p className="flex flex-col gap-[8px] items-center text-[30px] font-semibold">
            {hours ? hours : "00"}
            <span className="text-[20px]">Hours</span>
          </p>
          <p className=" text-[30px] font-semibold">:</p>
          <p className="flex flex-col gap-[8px] items-center text-[30px] font-semibold">
            {minutes ? minutes : "00"}
            <span className="text-[20px]">Minutes</span>
          </p>
          <p className=" text-[30px] font-semibold">:</p>
          <p className="flex flex-col gap-[8px] items-center text-[30px] font-semibold">
            {seconds ? seconds : "00"}
            <span className="text-[20px]">Seconds</span>
          </p>
        </div>
    </div>
  );
};

export default Timmer;
