import React from "react";
import { useRecoilValue } from "recoil";
import { animeList } from "../state";
import AnimeItem from "./AnimeItem";

export default function AnimeList() {
  const list = useRecoilValue(animeList);

  return (
    <div className="anime-list">
      {list.map((item) => (
        <AnimeItem key={item.mal_id} {...item} />
      ))}
    </div>
  );
}
