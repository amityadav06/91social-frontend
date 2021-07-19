/* eslint-disable */
import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these SPACEX Upcoming Missions!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="myimages/rocket.jpg"
              text="The Falcon 1 was an expendable launch system privately "
              label="Rocket"
              path="/"
            />
            <CardItem
              src="myimages/capsule.jpg"
              text="Falcon 9 is a two-stage rocket designed and manufactured by SpaceX "
              label="Capsule"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="myimages/ship.jpg"
              text="Starship and Super Heavy Rocket represent a fully "
              label="Ship"
              path="/"
            />
            <CardItem
              src="myimages/space.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Space"
              path="/"
            />
            <CardItem
              src="myimages/space2.jpg"
              text="Starship and Super Heavy Rocket represent a fully"
              label="Space"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
