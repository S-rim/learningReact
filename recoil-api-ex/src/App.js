import React from "react";
import { RecoilRoot } from "recoil";
import RandomCat from "./components/RandomCat";

export default function App() {
  return (
    <div className="App">
      <h1>Random Cat</h1>
      <p>페이지를 새로 고침할 때마다 랜덤한 고양이 사진을 보여줍니다!</p>
      <RecoilRoot>
        <RandomCat />
      </RecoilRoot>
    </div>
  );
}
