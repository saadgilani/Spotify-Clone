import React from "react";
import "./Card.css";
import { FaPlay } from "react-icons/fa";

function Card(props) {
  return (
    <>
      <div className="main">
        <div className="mainContent">
          <div className="cardsWrap">
            <div className="card">
              <div className="cardImage">
                <img
                  src={props.image}
                  alt="pic 1"
                />
                <span className="playIcon">
                  <FaPlay className="playIconsvg" />
                </span>
              </div>

              <div className="cardContent">
                <h3>{props.name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card };
