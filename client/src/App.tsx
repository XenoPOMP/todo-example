import React from 'react';
import "./styles/App.scss";
import Layout from "./components/Layout/Layout";
import Cookies from "universal-cookie";
import MainPage from "./components/MainPage/MainPage";
import setDefaultCookie from "./components/Header/setDefaultCookie";

function App() {
    const cookies = new Cookies();
    const cookieObj = cookies.getAll();
    (Object.keys(cookieObj).length === 0) ? setDefaultCookie()
        : console.log('Cookies already exist');

  return (
    <div className="App">
        <MainPage />
    </div>
  );
}

export default App;
