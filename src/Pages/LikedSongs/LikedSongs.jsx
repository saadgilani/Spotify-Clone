import React from "react";
import "./LikedSongs.css";
import { SongBar } from "../../Components/SongBar/SongBar";
import { Playlist } from "../Playlist/Playlist";
import { useSelector } from "react-redux";

export default function LikedSongs() {
  const likedSongs = useSelector((state) => {
    return state.sliceB.likedSongs;
  });

 

  return (
    <div>
      <div className="playlist_page">
        <div className="playlist_container">
          <div className="playlist_frame1">
            <img
              className="playlist_Image"
              src={
                "https://w0.peakpx.com/wallpaper/276/416/HD-wallpaper-heartblank-black-black-and-white-heart-little.jpg"
              }
              alt="liked songs"
            />
          </div>
          <div className="playlist_frame2">
            <p className="playlist_name ">Playlist</p>
            <h1 className="playlist_title">
              Liked Songs
            </h1>
            <p className="playlist_text">
              <a href="">Maryam Asif</a>. 1 song
            </p>
          </div>
        </div>

        <div className="playlist_playbox">
          <div>
            <a href="#">
              <img
                className="playlist_playIcon"
                src={
                  "https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button.png"
                }
                alt="image"
              />
            </a>
          </div>
          <div className="playlist_icon_">
            <a className="playlist_3dot" href="#">
              ...
            </a>
          </div>
        </div>
        <div className="songss">
          {likedSongs?.map((liked, index) => {
            return (
              <React.Fragment key={liked.id}>
                <SongBar
                  name={liked.name}
                  duration={liked.duration.totalMilliseconds}
                  index={index}
                  image={liked.albumOfTrack.coverArt.sources[0].url}
                  songObj={liked}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export { LikedSongs };
