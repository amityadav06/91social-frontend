/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../Dashboard.css";

var mainUrl = "https://api.spacexdata.com/v3/ships";
const Rockets = () => {
  const [data, setData] = useState([]);

  const getRockets = async () => {
    const res = await fetch(mainUrl);
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    getRockets();
  }, []);

  return (
    <div>
      <div className="btn-cont">
        <button className="cat-btn" onClick={getRockets}>
          Ships
        </button>
      </div>
      <section className="photos">
        <div className="photos-center">
          {data.map((ship) => {
            const { ship_id, ship_name, home_port, url, image } = ship;
            return (
              <article key={ship_id} className="photo">
                <img
                  src={`${image != undefined ? image : "myimages/ship.jpg"}`}
                  alt={ship_name}
                />
                <div className="photo-info">
                  <h4>{ship_name}</h4>
                  <p>{home_port}</p>
                  <a href={url}>more info...</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Rockets;
