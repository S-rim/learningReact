import React,{useState} from 'react';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트의 기초 알아보기',
      checked : true,
    },
    {
      id : 2,
      text : '컴포넌트 스타일링 해보기',
      checked : true
    },
    {
      id : 3,
      text : '일정관리 앱 만들어보기',
      checked : false
    }
  ])
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
