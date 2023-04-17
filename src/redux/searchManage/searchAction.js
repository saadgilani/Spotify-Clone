import { SEARCH_SONG } from "./searchType";

export const Search_song=(inputvalue)=>{
    return{
        type:SEARCH_SONG,
        payload:{
            info:"User searched for a song",
            input:inputvalue,
        }
    };
}