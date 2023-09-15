import React, { useState, useEffect } from "react";
import axios from "axios";

function Instagram() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=media_type,media_url&access_token=IGQWROMllaZAE44Snhid2I4ZAEtrTzBUN2gxT1lPNTJUd0dlWVBIbEpPUW9DY1NYamFYQ1FmNHozZA19NSUFHUjVHN1FJR2dXU2xaSGt6QWhfUVB1RUFlc0JDaDA1ZAGdDdDREZA3YzeG1LNEdTYlhvX1I2Ml9WYlBPYXMZD"
      )
      .then((response) => {
        console.log(response);
        setPhotos(response.data.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="instagram" className=" ">
      <h1 className="text-xl font-bold md:text-3xl py-6 text-center mt-12">
        Instagram Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mx-auto justify-items-center place-items-center columns-3 gap-2">
        {photos.map((photo) => (
          <div className="" key={photo.id}>
            <img
              src={photo.media_url}
              alt={photo.media_type}
              onClick={() => {
                openInNewTab("https://www.instagram.com/gosweetsibiu/");
              }}
              className="aspect-square w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instagram;
