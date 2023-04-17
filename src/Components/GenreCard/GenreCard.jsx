import React from 'react';
import './GenreCard.css';
import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Song_Play} from '../../redux/nowPlaying/nowPlayingAction';

const GenreCard=(props)=> {
 
  const [clickCheck,setClickCheck]=useState(0);

  const dispatch=useDispatch();
  const currentSong=useSelector(
    (state) => {return state.sliceB.playingSong}
);
  

  const showDetails=()=>{
    //console.log("inside1",props.searchObj);
    console.log("showDetails",clickCheck);
    dispatch(Song_Play(props.searchObj));
  }

  return (
    <div className='genreCard' onClick={showDetails}>
        <h2 className='crdtle'>{props.name}</h2>
        <img className='genreImg' src={props.image} alt="genreimg" />
    </div>
  )
}

export default GenreCard;
