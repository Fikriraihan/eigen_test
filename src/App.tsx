import React from "react";
import "./App.css";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<News text="hello" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
