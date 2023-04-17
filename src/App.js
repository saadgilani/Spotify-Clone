import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import { MainContainer } from "./Pages/MainContainer/MainContainer";
import { Library } from "./Pages/Library/Library";
import { Playlist } from "./Pages/Playlist/Playlist";
import { Route,Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import BaseComponents from "./Components/BaseComponents/BaseComponents";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import { LikedSongs } from "./Pages/LikedSongs/LikedSongs";
import Search from "./Pages/Search/Search";
import SearchPageNavBar from "./Components/SearchPageNavBar/SearchPageNavBar";
import GenreCard from "./Components/GenreCard/GenreCard";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseComponents />}>
          <Route path="/" element={<MainContainer />}></Route>
          <Route path="/playlist" element={<Playlist />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/likedsongs" element={<LikedSongs />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      {/* <Search/> */}
      {/* <SideBar /> */}
       </div>
  );
}

export default App;
   
