import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Home.jsx";

function App() {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch("https://friends-show-api.herokuapp.com/api/episodes/")
      .then((response) => response.json())
      .then((data) => setEpisodes(data.slice(0, 10)));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home episodes={episodes} />} />
      </Routes>
    </>
  );
}

export default App;
