import React, { useState, useRef } from "react";
import AmbientSoundComponent from "./AmbientSoundComponent";


// write a code to import the audio files from the public folder here path: "../public/sounds/light-rain-ambient-114354.mp3"



const AmbientMusic = () => {
    const [sounds, setSounds] = useState([
        {
            name: "Rain",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/light-rain-ambient-114354.mp3?alt=media&token=408293df-5598-4d35-b2ab-c77a5f0e898a"

        },
        {
            name: "City Traffic",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/city-traffic-outdoor-6414.mp3?alt=media&token=35f82d50-3702-402e-84f3-f339bd396440"
        },
        {
            name: "Crowd Talking",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/crowd_talking-6762.mp3?alt=media&token=3242bf66-ea86-46b6-b94e-841d4cf88446"
        },
        {
            name: "Keyboard Typing",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/quick-mechanical-keyboard-14391.mp3?alt=media&token=47058f83-8451-4464-914a-16232dae419a"
        },
        {
            name: "Mountain Stream",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/relaxing-mountains-rivers-streams-running-water-18178.mp3?alt=media&token=7dcd3394-5823-4544-bacf-a4eaf26f2f0e"
        },
        {
            name: "Ocean Waves",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/sandy-beach-calm-waves-water-nature-sounds-8052.mp3?alt=media&token=fe99280a-5077-4d29-a93e-e9632ad1591f"
        },
        {
            name: "Train",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/train-railroad-traffic-sound-8002.mp3?alt=media&token=d5f8d05e-b879-49f5-97d3-d34eaf1f7207"
        },
    ])
    

  return (
    <div className="flex flex-col gap-[15px] p-[20px]">
      {sounds.map((sound,index) => {
        return <AmbientSoundComponent key={index} sound={sound} />;
      })}
    </div>
  );
};

export default AmbientMusic;
