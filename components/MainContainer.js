import Head from "next/head";
import React from "react";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs bobster" + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Main" />
        <A href={"/users"} text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: purple;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
