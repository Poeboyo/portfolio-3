import React from "react";
import "./App.css";
import Sky from "./components/Sky";
import Name from "./components/Name";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Sky />
      <Name />
      <Tabs />
      <Footer />
    </div>
  );
}

export default App;
