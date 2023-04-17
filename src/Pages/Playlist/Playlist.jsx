import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Banner } from "../../Components/Banner/Banner";
import { SongBar } from "../../Components/SongBar/SongBar";
import "./Playlist.css";
import axios from 'axios'

function Playlist() {
  const params = useParams();
  const [playlist, setPlaylist] = useState();
  const id = params.id;

  useEffect(()=>{
    axios.get(`http://localhost:5000/getplaylist?id=${id}`)
    .then(res=>{
      setPlaylist(res.data)
    })
  }, [id])
  return playlist?(
    <div className="AudioList">
      <Banner playlistName={playlist.name}/>
      <div className="top">
        <p>Sr#</p>
        <p className="topArt">Track</p>
        <p className="topAlbum">
          Artist &nbsp;
          <i>
            <FaHeadphones />
          </i>
        </p>
        <p className="clock">
          <FaRegClock />
        </p>
      </div>
      {playlist.tracks.map((track, index)=>
        <SongBar name={track.name} artist={track.artist} duration={track.duration_ms} index={index} image={track.image}/>
      )}
    </div>
  ):(<></>)
}

export { Playlist };
