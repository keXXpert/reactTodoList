import React from "react";
import myCSS from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={myCSS.loader}>
      <div className={myCSS.ldsDualRing}></div>
    </div>
  );
}
