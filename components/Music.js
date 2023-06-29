import React, { useState } from 'react'
import AmbientSoundComponent from './AmbientSoundComponent';

const Music = () => {
    const [music, setMusic] = useState([
        {
            name: "Ambient Classical Guitar",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Fambient-classical-guitar-144998.mp3?alt=media&token=9c29a82c-a8ca-4b9b-b4d7-88a673fda9e4"
        },
        {
            name: "Ambient Guitar in the Forest",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Fin-the-forest-ambient-acoustic-guitar-instrumental-background-music-for-videos-5718.mp3?alt=media&token=18c699ce-c9ca-43b3-a2ac-3a28c1e0d13a"
        },
        {
            name: "Just Relax",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Fjust-relax-11157.mp3?alt=media&token=7a86f729-51b3-4012-b155-e4a09827c749"
        },
        {
            name: "Leva Eternity",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Fleva-eternity-149473.mp3?alt=media&token=9498164f-fe87-4c41-aa00-7a98f1757382"
        },
        {
            name: "Lofi Chill",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Flofi-chill-140858.mp3?alt=media&token=2a59fc85-38a5-46c9-b581-8168150aefe9"
        },
        {
            name: "Lofi Study",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Flofi-study-112191.mp3?alt=media&token=a7ea09d6-24d7-49b2-91a8-388c4121eae9"
        },
        {
            name: "Moment",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Fmoment-14023.mp3?alt=media&token=5b71177e-4969-4724-8118-04fd9399b257"
        },
        {
            name: "Reflected Light",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Freflected-light-147979.mp3?alt=media&token=f8a4f6fa-c99b-48c3-941a-29cb3f078da2"
        },
        {
            name: "Summer Walk",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Fsummer-walk-152722.mp3?alt=media&token=d9be58b0-a59b-4aaa-8961-136bc591f34b"
        },
        {
            name: "Trailer Sport Stylish",
            url: "https://firebasestorage.googleapis.com/v0/b/zencodezone.appspot.com/o/Music%2Ftrailer-sport-stylish-16073.mp3?alt=media&token=e38df9d9-5ea1-4d3a-8ab0-0784607ecd34"
        },
    ])
    

  return (
    <div className="flex flex-col gap-[15px] p-[20px]">
      {music.map((sound,index) => {
        return <AmbientSoundComponent key={index} sound={sound} />;
      })}
    </div>
  );
}

export default Music