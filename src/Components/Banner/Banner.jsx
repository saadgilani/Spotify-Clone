import React from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones } from "react-icons/fa";
function Banner(props) {
  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>{props.playlistName}</h2>
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
            </p>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
