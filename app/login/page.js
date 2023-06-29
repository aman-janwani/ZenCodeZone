"use client";
import React, { useEffect, useState } from "react";
import { Passage } from "@passageidentity/passage-js";

const Page = () => {
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

  if (isAuthenticated) {
    window.location.href = "/";
  }

  return (
    <>
      <passage-auth app-id={process.env.PASSAGE_APP_ID}></passage-auth>
    </>
  );
};

export default Page;
