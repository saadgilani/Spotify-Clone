import React, { useEffect, useState } from "react";
import GenreCard from "../../Components/GenreCard/GenreCard";
import "./Search.css";
import axios from 'axios';
import { useSelector } from 'react-redux';

function Search() {

  const [searchData,setSearchData]=useState([]);

  const searchedSong=useSelector(
    (state) => {return state.sliceA.searchedSong}
);


  useEffect(()=>{

    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: `${searchedSong}`,
        type: 'tracks',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': 'e54a17dd31mshf158607e2664d77p1e9f1djsnb4c7802f1eb7',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data.tracks.items[0].data.albumOfTrack.coverArt.sources[0].url); 
      const data=response.data.tracks.items;
      setSearchData(data);
      //setSearchData()
    }).catch(function (error) {
      console.error(error);
    });

  }, [searchedSong])

 


  return (
    <div className="searchPage">
        <h1 className="searchBrowseAll">Browse All</h1>
        {searchData.length>0 ? (
        <div className="cardDisplay">
         {
         searchData.map((search,index)=>{
             return (<GenreCard name={search.data.name} image={search.data.albumOfTrack.coverArt.sources[0].url} searchObj={search.data} index={index}/>)
         }
         )
        }
        </div>
        ) :(
          <div className="cardDisplay">
          <a className="serachLink" href="#">
            <div className="frame1 searchCard ">
              <div className="">
                <h2 className="searchCardName">Live Events</h2>
                <div className="searchImageBox">
                  <img
                    className="searchCardImage"
                    src={
                      "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                    }
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </a>
          <a className="serachLink" href="#"> 
           <div className="frame2 searchCard ">
            <div className="">
              <h2 className="searchCardName">Made For You</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
          <a className="serachLink" href="#"> 
          <div className="frame3 searchCard ">
            <div className="">
              <h2 className="searchCardName">New Releases</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
          <a className="serachLink" href="#"> 
          <div className="frame4 searchCard ">
            <div className="">
              <h2 className="searchCardName">Desi Songs</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
          <div className="frame5 searchCard ">
            <div className="">
              <h2 className="searchCardName">Pop</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          <a className="serachLink" href="#"> 
          <div className="frame6 searchCard ">
            <div className="">
              <h2 className="searchCardName">Hip-Hop</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
          <a className="serachLink" href="#"> 

          <div className="frame7 searchCard ">
            <div className="">
              <h2 className="searchCardName">Punjabi</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
          <a className="serachLink" href="#"> 

          <div className="frame8 searchCard ">
            <div className="">
              <h2 className="searchCardName">Charts</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
          <a className="serachLink" href="#"> 

          <div className="frame9 searchCard ">
            <div className="">
              <h2 className="searchCardName">Equal</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
          <a className="serachLink" href="#"> 
          <div className="frame10 searchCard ">
            <div className="">
              <h2 className="searchCardName">Indie</h2>
              <div className="searchImageBox">
                <img
                  className="searchCardImage"
                  src={
                    "https://img.freepik.com/premium-psd/music-concert-landing-page-template_23-2149959371.jpg?w=826"
                  }
                  alt="image"
                />
              </div>
            </div>
          </div>
          </a>
        </div>
        )
      }
  </div>
  );
}

export default Search;
