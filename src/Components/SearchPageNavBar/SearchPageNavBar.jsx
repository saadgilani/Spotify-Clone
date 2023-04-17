import React from "react";
import "./SearchPageNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons";
import {faArrowRight, faArrowDown,faPerson}  from "@fortawesome/free-solid-svg-icons";
import {useSelector,useDispatch} from 'react-redux';
import {Search_song} from '../../redux/searchManage/searchAction';
import { Link } from "react-router-dom";

const SearchPageNavBar = () => {

  const dispatch=useDispatch();

  const searchedSong=useSelector(
    (state) => {return state.sliceA.searchedSong}
);

  
  const handleSearchNameChange = (event) => {
    const inputValue = event.target.value;
   // console.log(inputValue);
    dispatch(Search_song(inputValue));
  };


  return (
    <div className="searchPageNavBar">
        <div className="searchNavBarLeftButtons">
          <a className="searchNavBarButton" href="">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
          <a className="searchNavBarButton" href="">
            <FontAwesomeIcon icon={faArrowRight} />
          </a>

  <input class="search-input" type="text" placeholder="What would you like to search for?" onChange={handleSearchNameChange}/>
        </div>

        <div className="searchNavBarRightButtons">
          {/* <a className="profileBtn" href="">
            <FontAwesomeIcon icon={faPerson} />
            Profile <FontAwesomeIcon icon={faArrowDown} />
          </a> */}
          <Link className="navBarRightBtns" to="/login"><span>Login</span> </Link>
        <Link className="navBarRightBtns" to="/signup"><span>SignUp</span></Link>
        </div>
    </div>
  );
};
export default SearchPageNavBar;
