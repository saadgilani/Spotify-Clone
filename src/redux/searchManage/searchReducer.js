import { Search_song } from "./searchAction";
import { SEARCH_SONG } from "./searchType";

const INITIAL_STATE = {
  searchedSong:'',
};

const Search_Reducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_SONG:
      if(action.payload.input!==undefined){
        console.log(action.payload.input);
      }
      return {
        searchedSong:action.payload.input
    }

    default:
      return prevState;
  }
};

export default Search_Reducer;
