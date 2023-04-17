import React from "react";
import { useLocation,Outlet } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import NavBar from "../NavBar/NavBar";
import SearchPageNavBar from "../SearchPageNavBar/SearchPageNavBar";
import SideBar from "../SideBar/SideBar";
import "./BaseComponents.css";

const BaseComponents = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';

  return (
    <div className="baseComponentsPage">
      {isSearchPage ? (
        <div className="navBar2"><SearchPageNavBar/></div>
      ) : (
        <div className="navBar2"><NavBar/></div>
      )}
      <div className="sideBar2"><SideBar /></div>
      <div className="musicPlayer2"><MusicPlayer /></div>
      <div className="mainContent2">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseComponents;
