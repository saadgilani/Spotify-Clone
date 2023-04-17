import { PLAY_SONG,LIKED_SONG,REM_LIKED_SONG } from "./nowPlayingType";

const INITIAL_STATE = {
  playingSong:{},
  likedSongs:[]
};

const Play_Reducer = (prevState = INITIAL_STATE, action) => {
  let prev = [...prevState.likedSongs]
  console.log(prev)
  console.log(prevState)
  switch (action.type) {
    case PLAY_SONG:
      if(action.payload.input!==undefined){
        console.log(action.payload.currentSong);
      }
      return {
        ...prevState,
        playingSong:action.payload.currentSong
    }

    case LIKED_SONG:
      return {
        ...prevState,
        likedSongs: [...prevState.likedSongs,action.payload.likedSong]
      };
    
    case REM_LIKED_SONG:
      let newArr=[...prevState.likedSongs];
      console.log(action.payload.index);
      newArr.splice(action.payload.index,1);
      console.log(newArr);
      return{
        ...prevState,
        likedSongs:newArr
      }
    default:
      return prevState;
  }
};

export default Play_Reducer;
