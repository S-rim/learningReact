import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import SearchBox from "./components/Search";
import AnimeList from "./components/AnimeList";
import "./components/style.css";

export default function App() {
  // return (
  //   <div className="App">
  //     <h1>Random Cat</h1>
  //     <p>페이지를 새로 고침할 때마다 랜덤한 고양이 사진을 보여줍니다!</p>
  //     <RecoilRoot>
  //       <RandomCat />
  //     </RecoilRoot>
  //   </div>
  // );
  return (
    <div className="App">
      <h1>애니메이션 검색</h1>
      <p>영어 키워드를 입력한 후 엔터를 누르세요</p>
      <RecoilRoot>
        <SearchBox />
        <Suspense fallback={<div>Loading...</div>}>
          <AnimeList />
        </Suspense>
      </RecoilRoot>
    </div>
  );
}
