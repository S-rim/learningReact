import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({ counter });

export default rootReducer;

// 컨테이너 컴포넌트에서 스토어에서 관리하고 있는 상태를 조회하기 위해 useSeletor를 사용할 때 필요
export type RootState = ReturnType<typeof rootReducer>;
