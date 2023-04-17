import React from "react";
import { FaHeart } from "react-icons/fa";
import "../SongBar/SongBar.css";
import { useSelector,useDispatch } from 'react-redux';
import { Song_Play} from '../../redux/nowPlaying/nowPlayingAction';
import { useState } from "react";
import { Remove_Liked_Song } from "../../redux/nowPlaying/nowPlayingAction";


function SongBar(props) {
  const milliseconds = props.duration; // 2 minutes in milliseconds
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

  const dispatch=useDispatch();
  const currentSong=useSelector(
    (state) => {return state.sliceB.playingSong}
);


const playSongFromLikedSongs=()=>{
  dispatch(Song_Play(props.songObj));
}

const Remove_Song= (index) => {
  console.log(index);
  dispatch(Remove_Liked_Song(index));
}




  return (
    <div className="songsContainer" onClick={playSongFromLikedSongs}>
      <div className="songs">
        <div className="count">
          <p>{props.index + 1}</p>
        </div>
        <div className="song">
          <div className="imgBox">
            <img
              src={props.image}
              alt=""
            />
          </div>
          <div className="section">
            <p className="songName">
              <span className="songSpan">{props.name}</span>
            </p>

            <div className="hits">
              <p className="hit">{props.artist}</p>
              <p className="duration">{formattedTime}</p>
              <div className="favourite" >
                <i onClick={()=>{
                  Remove_Song(props.index)
                  }}>
                  <FaHeart />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SongBar };
