import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Public from "./Pages/Public";
import Private from "./Pages/Private";
// import { stateData } from "./components/data";
import Card from "./components/Card";
import axios from "axios";
import Post from "./components/Post";

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setApiData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-9xl p-5 underline ">User Posts</h1>
      {apiData.map((post) => {
        return (
          <Post
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
};

export default App;
