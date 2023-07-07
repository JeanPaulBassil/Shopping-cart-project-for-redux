import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const cardItems = useSelector((state) => state.card.items);
  console.log(cardItems);
  console.log(isAuth);
  return (
    <div className="App">
      {isAuth && <Layout />}
      {!isAuth && <Auth />}
    </div>
  );
}

export default App;
