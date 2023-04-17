import React, {useState, useEffect} from "react";
import "./Library.css";
import { Card } from "../../Components/Card/Card";
import { FaPlay } from "react-icons/fa";
import axios from 'axios'

function Library() {

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
    <>
    <div className="topdiv">
      <div className="main2">
        <h1 className="palyHeading">Playlists</h1>
        <div className="flexcontainer">
          <div className="card2">
            <h1 className="likedSongs">Liked Songs</h1>
            <div className="cardContent">
              <h3> Liked Songs</h3>
            </div>
            <span className="playIcon2">
              <FaPlay className="playIconsvg" />
            </span>
          </div>
          <Card/>
        
          {playlists.map((playlist, key)=>
              <Card name={playlist.name} image="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export { Library };
