import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { randomCat } from "../store/state";

const RandomCat = () => {
  const photoUrl = useRecoilValueLoadable(randomCat);
  let content = null;

  switch (photoUrl.state) {
    case "hasValue":
      content = <img src={photoUrl.contents} alt="random cat" />;
      break;
    case "hasError":
      content = "데이터를 불러오는 중 에러가 발생했습니다.";
      break;
    case "loading":
    default:
      content = "불러오는 중 ...";
      break;
  }
  return <div className="random-cat">{content}</div>;
};

export default RandomCat;
