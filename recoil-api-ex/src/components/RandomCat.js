import React from "react";
import { useRecoilValue } from "recoil";
import { randomCat } from "../store/state";

const RandomCat = () => {
  const photoUrl = useRecoilValue(randomCat);
  return (
    <div className="random-cat">
      <img src={photoUrl} alt="random cat" />
    </div>
  );
};

export default RandomCat;
