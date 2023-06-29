"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Passage } from "@passageidentity/passage-js";

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const passage = new Passage("TvUwy32ytyWED2WwSGXYNuJb");
    const user = passage
      .getCurrentUser()
      .userInfo()
      .then((user) => {
        console.log(user);
        if (user) {
          setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
      }).catch((err) => {
        setIsAuthenticated(false);
      });
  });


  useEffect(() => {
    require("@passageidentity/passage-elements/passage-profile");
  }, []);

  if (!isAuthenticated) {
    window.location.href = "/login";
  }

  return (
    <>
    <passage-profile app-id={process.env.PASSAGE_APP_ID}></passage-profile>
    </>
  );
}
export default Page