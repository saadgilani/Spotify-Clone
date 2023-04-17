import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./MainContainer.css";
import { Card } from "../../Components/Card/Card";

function MainContainer() {

  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState([]);
  // useEffect(()=>{

    
    
  //   axios.get("http://localhost:5000/users/getallplaylists", {
  //       params:{
  //         userId:'641aa6df434269f9487e4503'
  //     }
  //   })
  //   .then(res=> {
  //     setPlaylists(res.data)
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  // }, [])

  useEffect(()=>{

    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'justin',
        type: 'multi',
        offset: '0',
        limit: '4',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': 'e54a17dd31mshf158607e2664d77p1e9f1djsnb4c7802f1eb7',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      const data=response.data;
      console.log(data);
      setSongs(data.tracks.items);
      setPlaylists(data.playlists.items);
      setArtist(data.artists.items);
    }).catch(function (error) {
      console.error(error);
    });

    // axios.get("http://localhost:5000/getalltracks")
    // .then(res=>{
    //   setSongs(res.data);
    // })
  }, [])
  const handle1=()=>{
    console.log(artist[0].data.visuals.avatarImage.sources[0].url);
  }

  return (
    <>
      <div className="mainContainer">
        <h1 className="heading">Playlists</h1>
        <div className="cards">
          {playlists.map((playlist, key)=>{
            return(
            <Card name={playlist.data.name} image={playlist.data.images.items[0].sources[0].url}/>
            )
          }
          )}
        </div>
        <h1>Songs</h1>
        <div className="cards">
          {songs.map((song, key)=>{
              return(
              <Card name={song.data.name} image={song.data.albumOfTrack.coverArt.sources[0].url}/>
              )
          }
          )}
        </div>
        <h1>Artists</h1>
        <div className="cards" onClick={handle1}>
          {artist.map((artistz, key)=>{
            const imageUrl = artistz.data.visuals.avatarImage?.sources[0]?.url;
              return(
              <Card name={artistz.data.profile.name} image={imageUrl}/>
              )
          }
          )}
        </div>
      </div>
    </>
  );
}

export { MainContainer };
