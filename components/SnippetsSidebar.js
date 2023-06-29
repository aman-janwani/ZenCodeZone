import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const SnippetsSidebar = ({loading, opendSnippet, setOpendSnippet, snippets, setSnippets}) => {
  // const [snippets, setSnippets] = useState([
    
  // ]);

  const [search, setSearch] = useState("");
  const [filteredSnippets, setFilteredSnippets] = useState([]);


  useEffect(() => {
    setFilteredSnippets(snippets);
  }, [snippets]);

  const handleAddSnippet = () => {
    const newSnippet = {
      title: "Title",
      description:
        "Description",
      code: `Code`,
      id: Math.random() * 1000,
    };

    setSnippets([...snippets, newSnippet]);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value.trim() === 0) {
      setFilteredSnippets(snippets);
    }
    const filteredSnippets = snippets.filter((snippet) => {
      return snippet.data().title.toLowerCase().includes(e.target.value.toLowerCase());
    }
    );

    setFilteredSnippets(filteredSnippets);

  }

  // if (loading) return (
  //   <BallTriangle className="mx-auto mt-[200px]" color="#ffffff" height={80} width={80} />
  // )


  return (
    <div className="w-[300px] overflow-scroll border-r-2 border-[#ffffff]/20 flex flex-col gap-[15px] h-full">
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        className="mx-[20px] bg-transparent outline-none border-2 border-[#ffffff]/20 rounded-md px-4 py-2"
        placeholder="Search the title..."
      />
      <button onClick={handleAddSnippet} className="bg-green-400 mx-[20px] text-black font-semibold py-2 rounded-md">
        Add
      </button>
      <div className="flex flex-col">
        {/* start */}
       {loading && (
        <div className="w-full h-[200px] flex items-center justify-center">
          <BallTriangle color="#ffffff" height={50} width={50} />
        </div>
       )}
        {filteredSnippets.map((snippet, index) => {
          if (snippet.title === "Title" && snippet.description === "Description" && snippet.code === "Code") return (
            <div onClick={() => {
              setOpendSnippet(snippet)
            }} key={index} className="flex flex-col duration-300 cursor-pointer p-[20px] gap-[5px] hover:bg-[#ffffff]/10">
              <p className="line-clamp-1 font-semibold">
                Title
              </p>
              <p className="line-clamp-2 text-[#ffffff]/80 text-[14px]">
                Description
              </p>
            </div>
          );
          return (
            <div onClick={() => {
              setOpendSnippet(snippet)
            }} key={index} className="flex flex-col duration-300 cursor-pointer p-[20px] gap-[5px] hover:bg-[#ffffff]/10">
              <p className="line-clamp-1 font-semibold">
                {snippet.data().title}
              </p>
              <p className="line-clamp-2 text-[#ffffff]/80 text-[14px]">
                {snippet.data().description}
              </p>
            </div>
          );
        })}
        {/* end */}
      </div>
    </div>
  );
};

export default SnippetsSidebar;
