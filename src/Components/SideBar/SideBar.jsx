import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from 'axios'
import React, { useEffect, useState } from "react";

const SideBar = () => {

  
  const [playlists, setPlaylists] = useState([]);
  useEffect(()=>{
      axios.get("http://localhost:5000/users/getallplaylists", {
        params:{
          userId:'641aa6df434269f9487e4503'
      }
    })
    .then(res=> {
      setPlaylists(res.data)
    })
    .catch(error => {
      console.error(error);
    });

  }, [])

  return (
    <div className="sideBar">
      <img
        className="spotifyLogo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />

      <div className="sideBarButtonSet">
        <Link className="sideBarButton" to="/">
          <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          <span className="sideBarText">Home</span>
        </Link>
        <Link className="sideBarButton" to="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <span className="sideBarText">Search</span>
        </Link>
        <Link className="sideBarButton" to="/library">
          <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
          <span className="sideBarText">Your Library</span>
        </Link>
      </div>

      <div className="sideBarButtonSet2">
        <Link className="sideBarButton" to="">
          <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon>
          <span className="sideBarText">Create Playlist</span>
        </Link>
        <Link className="sideBarButton" to="/likedsongs">
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          <span className="sideBarText">Liked Songs</span>
        </Link>

        <hr />
      </div>

      <div className="playListSet">
        {playlists.map((playlist, key)=>
            <Link className="playList" to={`/playlist/${playlist._id}`}>
              {playlist.name}
            </Link>
        )}
      </div>
     
    </div>


  );
};

export default SideBar;
