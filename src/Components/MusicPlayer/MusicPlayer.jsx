import React, { useState, useRef,useEffect } from 'react';
import "./MusicPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faStepBackward,faBackwardFast,faDownload,faPlay,faPause,faStepForward,faForwardFast,faShareAlt,faVolumeUp}  from "@fortawesome/free-solid-svg-icons";
import {useSelector,useDispatch} from 'react-redux';
import { Liked_Songs } from '../../redux/nowPlaying/nowPlayingAction';
import axios from 'axios';


const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume,setVolume]=useState(100);
  const [nowPlayingSong,setNowPlayingSong]=useState('');
  const [currentTime, setCurrentTime] = useState(0)

  const dispatch=useDispatch();

  const audioRef = useRef();

  const currentSongRedux=useSelector(
    (state) => {return state.sliceB.playingSong}
);






function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

useEffect(() => {

  if(currentSongRedux!==undefined){
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/tracks/',
      params: {ids: `${currentSongRedux.id}`},
      headers: {
        'X-RapidAPI-Key': 'e54a17dd31mshf158607e2664d77p1e9f1djsnb4c7802f1eb7',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(currentSongRedux);
     // console.log(response.data.tracks[0].preview_url);
     const  data=response.data.tracks[0].preview_url;
     setNowPlayingSong(data)
    }).catch(function (error) {
      console.error(error);
    });

  }else{
    console.log('ERROR');
  }

 togglePlay();

}, [currentSongRedux])


useEffect(() => {
  const intervalId = setInterval(() => {
    if (audioRef.current) {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    }
  }, 1000);

  return () => clearInterval(intervalId);
}, [audioRef]);


function handleTimeUpdate() {
  setCurrentTime(Math.floor(audioRef.current.currentTime));
}

function handleProgressBarChange(event) {
  const time = parseFloat(event.target.value);
  audioRef.current.currentTime = time;
  setCurrentTime(time);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}


 
  
  function togglePlay() {
    console.log(currentSongRedux);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function playNextSong() {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  }

  // Play the previous song in the playlist
  function playPrevSong() {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  }

  // Handle the "ended" event when a song finishes playing
  function handleSongEnd() {
    playNextSong();
  }
  const handleVolumeChange = (event) => {
    const newVolume=event.target.value;
    audioRef.current.volume=newVolume/100;
    setVolume(newVolume);
  }

  const likeSong=()=>{

    console.log("zinger",currentSongRedux);
    dispatch(Liked_Songs(currentSongRedux));
  }
  

  const currentSong = songs[currentSongIndex];

  return Object.keys(currentSongRedux).length!==0 ?(
    <div class="musicPlayer">
    <div class="musicPlayerCard">
      <div class="musicPlayerImageContainer">
        <img class="musicPlayerImage" src={currentSongRedux.albumOfTrack.coverArt.sources[0].url} alt="Album" />
      </div>
      <div class="musicPlayerSongDetails">
        <h3>{currentSongRedux.name}</h3>
        <h4>{currentSongRedux.albumOfTrack.name} and by {currentSongRedux.artists.items[0].profile.name}</h4>
        
      </div>

      <div className="volumeSection">
      <FontAwesomeIcon className="volumeIcon" icon={faVolumeUp}></FontAwesomeIcon>
      <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
      </div>
      <div class="musicPlayerButtons">
        <audio src="" preload="metadata"/>
        <div className="top">
          <div className="left">
            <div className="loved"> 
             <FontAwesomeIcon className="musicPlayerIcon shineIcon" icon={faHeart} onClick={likeSong}></FontAwesomeIcon>
            </div>

            <div className="download">
              <FontAwesomeIcon className="musicPlayerIcon" icon={faDownload}></FontAwesomeIcon>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <FontAwesomeIcon className="musicPlayerIcon" icon={faStepBackward}/>
              <FontAwesomeIcon className="musicPlayerIcon" icon={faBackwardFast}/>
            </div>
            <div className="playPause" onClick={togglePlay}>
              {!isPlaying ? <FontAwesomeIcon className="musicPlayerIcon" icon={faPlay}/>: 
              <FontAwesomeIcon className="musicPlayerIcon" icon={faPause}/> }
            </div>
            <div className="forward">
            <FontAwesomeIcon className="musicPlayerIcon" icon={faForwardFast}/>
              <FontAwesomeIcon className="musicPlayerIcon" icon={faStepForward}/>
            </div>
          </div>
          <div className="right">
            <FontAwesomeIcon className="musicPlayerIcon shineIcon" icon={faShareAlt}/>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">0:00</div>
          <input type="range" className="progressBar" value={currentTime} max={audioRef.current?.duration} onChange={handleProgressBarChange}  />
          <div className="duration">{millisToMinutesAndSeconds(currentSongRedux.duration.totalMilliseconds)}</div>
        </div>
      </div>
    </div>
    <audio ref={audioRef} src={nowPlayingSong} onEnded={handleSongEnd} />
  </div>
  ): 
  
  <div class="musicPlayer">
  <div class="musicPlayerCard">
    <div class="musicPlayerImageContainer">
      <img class="musicPlayerImage" src="" alt="Album" />
    </div>
    <div class="musicPlayerSongDetails">
      <h3>Song Name</h3>
      <h4>Title and by Artist</h4>
      
    </div>

    <div className="volumeSection">
    <FontAwesomeIcon className="volumeIcon" icon={faVolumeUp}></FontAwesomeIcon>
    <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
    </div>
    <div class="musicPlayerButtons">
      <audio src="" preload="metadata"/>
      <div className="top">
        <div className="left">
          <div className="loved"> 
           <FontAwesomeIcon className="musicPlayerIcon shineIcon" icon={faHeart}></FontAwesomeIcon>
          </div>

          <div className="download">
            <FontAwesomeIcon className="musicPlayerIcon" icon={faDownload}></FontAwesomeIcon>
          </div>
        </div>
        <div className="middle">
          <div className="back">
            <FontAwesomeIcon className="musicPlayerIcon" icon={faStepBackward}/>
            <FontAwesomeIcon className="musicPlayerIcon" icon={faBackwardFast}/>
          </div>
          <div className="playPause" onClick={togglePlay}>
            {!isPlaying ? <FontAwesomeIcon className="musicPlayerIcon" icon={faPlay}/>: 
            <FontAwesomeIcon className="musicPlayerIcon" icon={faPause}/> }
          </div>
          <div className="forward">
          <FontAwesomeIcon className="musicPlayerIcon" icon={faForwardFast}/>
            <FontAwesomeIcon className="musicPlayerIcon" icon={faStepForward}/>
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon className="musicPlayerIcon shineIcon" icon={faShareAlt}/>
        </div>
      </div>
      <div className="bottom">
        <div className="currentTime">0:00</div>
        <input type="range" className="progressBar" />
        <div className="duration">0:00</div>
      </div>
    </div>
  </div>
  <audio ref={audioRef} src={nowPlayingSong} onEnded={handleSongEnd} />
</div>
};

export default MusicPlayer;
