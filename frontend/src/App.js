import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FetchUsers from "./components/FetchUsers";
import DisplayUsers from "./components/DisplayUsers";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Fetch Users</Link> | <Link to="/show">Show Saved Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FetchUsers />} />
        <Route path="/show" element={<DisplayUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
