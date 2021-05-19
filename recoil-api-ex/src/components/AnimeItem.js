import React from "react";

const AnimeItem = ({ image_url, title }) => {
  return (
    <figure className="anime-item">
      <img src={image_url} alt={title} />
      <figcaption title={title}>{title}</figcaption>
    </figure>
  );
};

export default AnimeItem;
