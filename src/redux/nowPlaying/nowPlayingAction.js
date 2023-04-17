import { PLAY_SONG,LIKED_SONG,REM_LIKED_SONG } from "./nowPlayingType";

export const Song_Play=(songDetails)=>{
    return{
        type:PLAY_SONG,
        payload:{
            info:"User played a song",
            currentSong:songDetails,
        }
    };
}
export const Liked_Songs=(songObj)=>{
    return{
        type:LIKED_SONG,
        payload:{
            info:"User liked a song",
            likedSong:songObj,
        }
    };
}
export const Remove_Liked_Song=(index)=>{
    return{
        type:REM_LIKED_SONG,
        payload:{
            info:"User deleted a liked song",
            songIndex:index,
        }
    };
}