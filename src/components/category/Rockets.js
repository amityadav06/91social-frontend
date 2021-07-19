import React, { useState, useEffect } from "react";
import "../Dashboard.css";

var mainUrl = "https://api.spacexdata.com/v3/rockets";
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
          Rockets
        </button>
      </div>
      <section className="photos">
        <div className="photos-center">
          {data.map((rocket) => {
            const {
              rocket_id,
              rocket_name,
              flickr_images,
              country,
              wikipedia,
            } = rocket;
            return (
              <article key={rocket_id} className="photo">
                <img src={flickr_images[0]} alt={rocket_name} />
                <div className="photo-info">
                  <h4>{rocket_name}</h4>
                  <p>{country}</p>
                  <a href={wikipedia}>more info...</a>
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
