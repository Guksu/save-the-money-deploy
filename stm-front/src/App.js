import React from "react";
import GlobalStyles from "../src/styles/GlobalSttyled";
import Header from "./components/Header";
import AppRouter from "./components/Router";

function App() {
  return (
    <>
      <Header></Header>
      <AppRouter></AppRouter>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;
