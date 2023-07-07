import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => state.card);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-http-668ef-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    sendRequest();
  }, [cart]);
  return (
    <div className="App">
      {isAuth && <Layout />}
      {!isAuth && <Auth />}
    </div>
  );
}

export default App;
