import redux,{ createStore,combineReducers,applyMiddleware } from "redux";
import searchReducer from './searchManage/searchReducer';
import PlayReducer from './nowPlaying/nowPlayingReducer';



const rootReducer=combineReducers({
    sliceA: searchReducer,
    sliceB: PlayReducer,
});

export const store=createStore(rootReducer);