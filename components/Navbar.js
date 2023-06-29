import moment from "moment/moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";

const Navbar = ({colorThemes}) => {
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  
  
  return (
    <Menu>
      <div className="flex justify-between items-start px-[30px] py-[20px] ">
        <div>
          {colorThemes === "Dark" ? (
            <Image
            src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1687175301/ZenCodeZone/Frame_3_1_iut2pd.svg"
            width={141}
            height={63}
          />
          ) : (
            <Image
            src="https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Frame%204.png?alt=media&token=e100a405-f778-4af9-a0c7-4a92fa028baf"
            width={141}
            height={63}
          />
          )}
        </div>
        <div>
          {colorThemes === "Dark" ? (
            <p className="font-bold text-[80px] text-[#111111]/90">
            {moment(date).format("HH:mm")}
          </p>
          ) : (
            <p className="font-bold text-[80px] text-[#ffffff]">
            {moment(date).format("HH:mm")}
          </p>
          )}
        </div>
        <Menu.Button>
          <div className={`${colorThemes === "Light" && ("border border-[#ffffff]")} p-3 rounded-[10px] bg-[#111111]/70 flex items-center justify-center cursor-pointer`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#FFFFFF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>
        </Menu.Button>
        <Menu.Items className="absolute right-[30px] top-[90px] bg-[#111111]/80 rounded-[10px] p-[15px] flex flex-col gap-[10px] w-[200px]">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-[#ffffff]/20"} text-white w-full p-[10px] rounded-[5px] `}
                href="/profile"
              >
                Profile
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default Navbar;
