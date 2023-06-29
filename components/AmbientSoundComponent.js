import React, { useState, useRef } from "react";


const AmbientSoundComponent = ({sound}) => {
    const audioRef = useRef(null);

    const [volume, setVolume] = useState(0);

    const handleVloume = (e) => {
        audioRef.current.play()
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value / 100;
    }


  return (
    <div className="flex items-center justify-between">
        <p className="text-[#ffffff] font-medium">{sound.name}</p>
        <input type="range" defaultValue="0" onChange={handleVloume} />
        <audio ref={audioRef} hidden controls loop controlsList="nodownload noplaybackrate">
            <source src={sound.url} type="audio/ogg" />
        </audio>
      </div>
  )
}

export default AmbientSoundComponent