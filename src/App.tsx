import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CovidContainer from "./container/CovidContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<CovidContainer />}>
          <Route path="*" element={<CovidContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
