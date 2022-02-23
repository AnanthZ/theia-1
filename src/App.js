import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Profilepage from "./Pages/Profilepage/Profilepage";
import NavigationBar from "./Components/navigationBar/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile/:uid" element={<Profilepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
