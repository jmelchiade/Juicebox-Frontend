import React, { useState, useEffect } from "react";
import { NavBar, Posts, Login, Profile, Register, Search, Tags } from "./";

const Main = () => {
  const [isLogin, SetLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState({});
  const [posts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const userLogin = async () => {
    const user = await getUserInfo(localStorage.getItem("token"));
    setUserLoggedIn(user);
    SetLogin(true);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userLogin();
    }
  }, []);
  return <h1>this is Main</h1>;
};

export default Main;
