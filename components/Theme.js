import Image from "next/image";
import React, { useEffect, useState } from "react";

const Theme = () => {
  const [themeS, setThemeS] = useState("");
  const [themes, setThemes] = useState([
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F1.png?alt=media&token=4032d0a8-a47c-4063-958b-8033a1cfdd76",
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F2.png?alt=media&token=c67da6a2-c866-4a31-b667-2670bb653db7",
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F3.png?alt=media&token=3d13582c-abe9-444f-8727-a8be1263e26c",
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F4.png?alt=media&token=5f65fc39-7fa4-40a8-b774-50e605edbdbd",
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F5.png?alt=media&token=6bd1ee84-fb0c-4650-aaf5-3efdc68f7855",
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F6.png?alt=media&token=3835213f-5f8a-4c73-9174-7eae510a03ee",
  ]);

  const handleTheme = () => {
    localStorage.setItem("theme", themeS);
  };

  useEffect(() => {
    setThemeS(localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    if (themeS !== "") {
      handleTheme();
    }
  }, [themeS]);

  return (
    <div className="grid grid-cols-2 gap-[20px] p-[20px] text-white">
      {themes.map((theme, index) => {
        return (
          <div key={index}>
            <label htmlFor={index}>
              <Image
                className={`rounded-xl cursor-pointer ${
                  themeS === theme ? "border-4 border-blue-500" : ""
                }`}
                src={theme}
                width={200}
                height={125}
                alt={"theme"}
              />
            </label>
            <input
              className="hidden"
              onChange={(e) => {
                setThemeS(e.target.value);
              }}
              type="radio"
              name="theme"
              id={index}
              value={theme}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Theme;
