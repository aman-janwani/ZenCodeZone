import React, { useState } from "react";

const Youtube = () => {
  const [link, setLink] = useState("");
  return (
    <div className="flex flex-col gap-[15px] p-[20px]">
      <input
        onChange={(e) => {
          const id = e.target.value.split("v=")[1];
          setLink(id);
        }}
        type="text"
        className="bg-transparent rounded-lg text-white px-2 border-2 border-[#ffffff]/20 outline-none text-[14px] py-1"
        placeholder="Place any video Youtube Link"
      />
{/* https://www.youtube.com/watch?v=J8dYgIjttM8 */}
      <iframe
        width="460"
        height="350"
        src={`https://www.youtube.com/embed/${link}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
    </div>
  );
};

export default Youtube;
