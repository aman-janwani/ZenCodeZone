"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Passage } from "@passageidentity/passage-js";
import Navbar from "@/components/LandingPage/Navbar";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const passage = new Passage("TvUwy32ytyWED2WwSGXYNuJb");
    const user = passage
      .getCurrentUser()
      .userInfo()
      .then((user) => {
        console.log(user);
        if (user) {
          setIsAuthenticated(true);
        }
      });
  });

  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-700 text-white">
      <Navbar />
      <div className="px-[50px] flex flex-col items-center gap-[50px] py-[50px]">
        <p className="text-[70px] text-center text-amber-300 font-bold">Elevate your coding experience with ZenCodeZone.</p>
        <Image src="https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Group%202.png?alt=media&token=a3228948-8493-4241-9f13-c2e6d83738c6" width={1135.4} height={500} />
      </div>
    </div>
  );
}

export default Home;
