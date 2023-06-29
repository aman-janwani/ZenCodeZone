import React, { useEffect } from "react";
import { useState } from "react";

import { db } from "@/firebase";
import { addDoc, collection, getDocs, deleteDoc , doc } from "firebase/firestore";

const SnippetsMain = ({ opendSnippet, fbUser, setSnippets, snippets, setOpendSnippet }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  console.log(fbUser);

  useEffect(() => {
    if (!opendSnippet) return;
    if (
      opendSnippet.title === "Title" &&
      opendSnippet.description === "Description" &&
      opendSnippet.code === "Code"
    ) {
      setTitle("Title");
      setDescription("Description");
      setCode("Code");
      return;
    }
    setTitle(opendSnippet.data().title || "Title");
    setDescription(opendSnippet.data().description || "Description");
    setCode(opendSnippet.data().code || "Code");
  }, [opendSnippet]);

  if (!opendSnippet)
    return (
      <div className="flex-1 px-5 pb-10 flex items-center justify-center overflow-y-scroll">
        Please select a snippet
      </div>
    );

  const getSnippets = async () => {
    if (!fbUser) return;
    const querySnapshot = await getDocs(
      collection(db, "users", fbUser.id, "snippets")
    );
    setSnippets(querySnapshot.docs);
  };

  const handleSaveSnippet = async () => {
    if (!title || !description || !code) return;
    if (!fbUser) return;
    if (title.trim().length === 0 || description.trim().length === 0) return;

    const docRef = await addDoc(
      collection(db, "users", fbUser.id, "snippets"),
      {
        title,
        description,
        code,
      }
    );

    setTimeout(() => {
      getSnippets();
    },[2000])
    // setSnippets([...snippets,do])
  };

  const handleDeleteSnippet = () => {
    if (!fbUser) return;
    if (
      opendSnippet.title === "Title" &&
      opendSnippet.description === "Description" &&
      opendSnippet.code === "Code"
    ) {
      // delete from local state
      setSnippets(
        snippets.filter((snippet) => snippet.id !== opendSnippet.id)
      )
      setOpendSnippet(null);
    } else {
      // delete from firebase
      const deleteSnippet = async () => {
        await deleteDoc(doc(db, "users", fbUser.id, "snippets", opendSnippet.id));
        getSnippets();
        setOpendSnippet(null);
      }
      deleteSnippet();
    }
  }

  return (
    <div className="flex-1 px-5 pb-10 flex flex-col gap-[10px] overflow-y-scroll">
      <div>
        <input
          type="text"
          className="bg-transparent outline-none border-2 border-[#ffffff]/20 rounded-md px-4 py-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className="w-full h-96 bg-transparent outline-none border-2 border-[#ffffff]/20 rounded-md px-4 py-2"
          placeholder="Code..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
      </div>
      <div>
        <textarea
          className="w-full h-48 bg-transparent outline-none border-2 border-[#ffffff]/20 rounded-md px-4 py-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center gap-[30px]">
        <button onClick={handleDeleteSnippet} className="bg-red-400 text-white font-semibold py-3 px-8 rounded-md">
          Delete
        </button>
        <button
          onClick={handleSaveSnippet}
          className="bg-green-400 text-black font-semibold py-3 px-8 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SnippetsMain;
