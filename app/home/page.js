"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Passage } from "@passageidentity/passage-js";
import Navbar from "@/components/Navbar";
import AmbientMusic from "@/components/AmbientMusic";
import Youtube from "@/components/Youtube";
import Timmer from "@/components/Timmer";
import { db } from "@/firebase";
import { collection, addDoc, doc, getDocs, query, where } from "firebase/firestore";
import Snippets from "@/components/Snippets";
import Music from "@/components/Music";
import Theme from "@/components/Theme";
import { BallTriangle } from "react-loader-spinner";

const Page = () => {
  const [theme, setTheme] = useState("")
  const [fbUser, setFbUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAmbientMusic, setIsAmbientMusic] = useState(false);
  const [isYoutube, setIsYoutube] = useState(false);
  const [isTimmer, setIsTimmer] = useState(false);
  const [isSnippet, setIsSnippet] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const [isTheme, setIsTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const [themes, setThemes] = useState([
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F1.png?alt=media&token=4032d0a8-a47c-4063-958b-8033a1cfdd76",
    "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F2.png?alt=media&token=c67da6a2-c866-4a31-b667-2670bb653db7",
  ]);
  const [colorThemes, setColorThemes] = useState("")

  const getTheme = () => {
    if (localStorage.getItem("theme") === null) {
      setColorThemes("Dark")
      localStorage.setItem(
        "theme",
        "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Theme%2F1.png?alt=media&token=4032d0a8-a47c-4063-958b-8033a1cfdd76"
      );
    } else {
      setTheme(localStorage.getItem("theme"));
      themes.includes(localStorage.getItem("theme"))
        ? setColorThemes("Dark")
        : setColorThemes("Light");
    }
  }


  const openTheme = () => {
    setIsTheme(true);
  }

  const closeTheme = () => {
    setIsTheme(false);
    getTheme();
    console.log(colorThemes);
  }

  const openMusic = () => {
    setIsMusic(true);
  }

  const closeMusic = () => {
    setIsMusic(false);
  }
  
  const openSnippet = () => {
    setIsSnippet(true);
  };

  const closeSnippet = () => {
    setIsSnippet(false);
  };

  const openTimmer = () => {
    setIsTimmer(true);
  };

  const closeTimmer = () => {
    setIsTimmer(false);
  };

  const openYoutube = () => {
    setIsYoutube(true);
  };

  const closeYoutube = () => {
    setIsYoutube(false);
  };


  const openAmbientMusic = () => {
    setIsAmbientMusic(true);
  };

  const closeAmbientMusic = () => {
    setIsAmbientMusic(false);
  };

  const saveUser = async (user) => {
    const q = query(collection(db, "users"), where("email", "==", user.email));

    const querySnapshot = await getDocs(q);
    setFbUser(querySnapshot.docs[0]);
    if (querySnapshot.size == 0) {
      const docRef = await addDoc(collection(db, "users"), user);
      console.log("Document written with ID: ", docRef.id);
    } else {
      console.log("Document already exists");
    }
  }

  useEffect(() => {
    const passage = new Passage("TvUwy32ytyWED2WwSGXYNuJb");
    const user = passage
      .getCurrentUser()
      .userInfo()
      .then((user) => {
        console.log(user);
        saveUser(user)
        if (user) {
          setIsAuthenticated(true);
          setLoading(false);
        } else {
          setIsAuthenticated(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    require("@passageidentity/passage-elements/passage-profile");
  }, []);

  if (!isAuthenticated) {
    window.location.href = "/login";
  }

  
  useEffect(() => {
    getTheme();
  }, []);

  if(loading) {
    return (
      <div className="flex items-center justify-center bg-gray-950 h-screen">
        <BallTriangle color="#4fa94d" height={80} width={80} />
      </div>
    )
  }

  return (
    <div style={{
      backgroundImage: `url(${theme})`,
    }} className={`flex flex-col gap-0 bg-cover bg-gray-900 w-full h-screen overflow-hidden`}>
      <Navbar colorThemes={colorThemes} />
      <div className="flex items-center justify-between px-[30px] flex-1">
        <div className="bg-[#111111]/70 px-[20px] py-[25px] flex flex-col gap-[15px] w-[70px] rounded-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={openAmbientMusic}
            className="w-[30px] h-[30px] text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={openTheme}
            className="w-[30px] h-[30px] text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={openTimmer}
            className="w-[30px] h-[30px] text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={openYoutube}
            className="w-[30px] h-[30px] text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div onClick={openSnippet} className="text-white w-[338px] hover:bg-[#111111] duration-500 h-fit px-[20px] py-[20px] rounded-[15px] bg-[#111111]/70 flex items-center justify-between cursor-pointer">
            <p className="text-[20px]">Snippet</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div onClick={openMusic} className="text-white w-[338px] hover:bg-[#111111] duration-500 h-fit px-[20px] py-[20px] rounded-[15px] bg-[#111111]/70 flex items-center justify-between cursor-pointer">
            <p className="text-[20px]">Music</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        {isAmbientMusic ? (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 5, y: 10 }}
            position={null}
            grid={[1, 1]}
            scale={1}
          >
            <div className="bg-[#111111]/80 rounded-[20px] top-1/3 left-1/3 absolute w-[400px]">
              <div className="w-full flex items-center justify-between p-[15px]">
                <div className="handle text-white font-medium text-[20px] cursor-move w-full">
                  Ambient Music
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={closeAmbientMusic}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <AmbientMusic />
            </div>
          </Draggable>
        ) : (
          ""
        )}
        {isYoutube ? (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 5, y: 10 }}
            position={null}
            grid={[1, 1]}
            scale={1}
          >
            <div className="bg-[#111111]/80 rounded-[20px] top-1/3 left-1/3 absolute w-[500px]">
              <div className="w-full flex items-center justify-between p-[15px]">
                <div className="handle text-white font-medium text-[20px] cursor-move w-full">
                  Youtube
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={closeYoutube}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <Youtube />
            </div>
          </Draggable>
        ) : (
          ""
        )}
        {isTimmer ? (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 5, y: 10 }}
            position={null}
            grid={[1, 1]}
            scale={1}
          >
            <div className="bg-[#111111]/80 rounded-[20px] top-1/3 left-1/3 absolute w-[500px]">
              <div className="w-full flex items-center justify-between p-[15px]">
                <div className="handle text-white font-medium text-[20px] cursor-move w-full">
                Timer
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={closeTimmer}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <Timmer />
            </div>
          </Draggable>
        ) : (
          ""
        )}
        {isSnippet ? (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 5, y: 10 }}
            position={null}
            grid={[1, 1]}
            scale={1}
          >
            <div className="bg-[#111111]/80 rounded-[20px] top-[5%] left-[15%] absolute w-[1000px] h-[90%] max-h-[90%] flex flex-col">
              <div className="w-full flex items-center justify-between p-[15px]">
                <div className="handle text-white font-medium text-[20px] cursor-move w-full">
                  Snippets
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={closeSnippet}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <Snippets fbUser={fbUser} />
            </div>
          </Draggable>
        ) : (
          ""
        )}
        {isMusic ? (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 5, y: 10 }}
            position={null}
            grid={[1, 1]}
            scale={1}
          >
            <div className="bg-[#111111]/80 rounded-[20px] top-1/4 left-1/3 absolute w-[400px]">
              <div className="w-full flex items-center justify-between p-[15px]">
                <div className="handle text-white font-medium text-[20px] cursor-move w-full">
                  Music
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={closeMusic}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <Music />
            </div>
          </Draggable>
        ) : (
          ""
        )}
        {isTheme ? (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 5, y: 10 }}
            position={null}
            grid={[1, 1]}
            scale={1}
          >
            <div className="bg-[#111111]/80 rounded-[20px] top-1/4 left-1/3 absolute w-[500px]">
              <div className="w-full flex items-center justify-between p-[15px]">
                <div className="handle text-white font-medium text-[20px] cursor-move w-full">
                  Select Theme
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white cursor-pointer"
                  onClick={closeTheme}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <Theme />
            </div>
          </Draggable>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Page;
