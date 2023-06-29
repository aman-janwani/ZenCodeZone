import React, { useEffect, useState } from "react";
import SnippetsSidebar from "./SnippetsSidebar";
import SnippetsMain from "./SnippetsMain";
import { db } from "@/firebase";
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";

const Snippets = ({ fbUser }) => {
  const [opendSnippet, setOpendSnippet] = useState(null);
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSnippets = async () => {
    if (!fbUser) return;
    const querySnapshot = await getDocs(collection(db, "users", fbUser.id, "snippets")).then((querySnapshot) => {
      setSnippets(querySnapshot.docs);
      console.log(querySnapshot.docs);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
    // querySnapshot.forEach((doc) => {
    //   setSnippets([...snippets, doc.data()]);
    //   console.log(doc.data());
    // })
    // console.log(querySnapshot);
    // setSnippets(querySnapshot.docs)
    // setLoading(false);
  };

  console.log(snippets, "sss");

  useEffect(() => {
    getSnippets();
  }, [fbUser])

  return (
    <div className="flex flex-1 overflow-y-scroll justify-between text-white">
      <SnippetsSidebar
        snippets={snippets}
        setSnippets={setSnippets}
        opendSnippet={opendSnippet}
        setOpendSnippet={setOpendSnippet}
        loading={loading}
      />
      <SnippetsMain
        snippets={snippets}
        setSnippets={setSnippets}
        opendSnippet={opendSnippet}
        fbUser={fbUser}
        setOpendSnippet={setOpendSnippet}
      />
    </div>
  );
};

export default Snippets;
