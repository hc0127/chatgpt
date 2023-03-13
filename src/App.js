import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Chatgpt from "./pages/chatgpt";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <Routes history={history}>
      <Route path="/" element={<Chatgpt />} />
      <Route path="/chatgpt" element={<Chatgpt />} />
    </Routes>
  );
}

export default App;
