import React from "react";
import { ContentWrap } from "./contentStyles";

function Content() {
  return (
    <ContentWrap>
      <h2>Some Heading</h2>
        <div className="box">
        <div className="cont">
          <h1>Titulo</h1>
          <p>Texto Texto Texto Texto Texto Texto Texto Texto </p>
        </div>
        <div className="cont">
          <h1>Titulo</h1>
          <p>Texto Texto Texto Texto Texto Texto Texto Texto </p>
        </div>
        <div className="cont">
          <h1>Titulo</h1>
          <p>Texto Texto Texto Texto Texto Texto Texto Texto </p>
        </div>
        <div className="cont">
          <h1>Titulo</h1>
          <p>Texto Texto Texto Texto Texto Texto Texto Texto </p>
        </div>
      </div>
    </ContentWrap>
  );
}

export default Content;
