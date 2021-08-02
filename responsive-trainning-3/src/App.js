import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import { AppWrap } from "./AppStyles";

function App() {
  return (
    <AppWrap>
      <body>
        <Header />
        <h1>Consoles</h1>
        <Section />
      </body>
    </AppWrap>
  );
}

export default App;
