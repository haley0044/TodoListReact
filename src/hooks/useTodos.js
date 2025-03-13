import { useState } from "react";

// useState()로 todos 상태 기능
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <p>테스트</p>
    </div>
  );
}

export default App;

// 할 일 추가 기능 (addTodo)
// 할 일 완료/미완료 변경 (toggleComplete)
// 할 일 삭제 기능 (removeTodo)
// UI를 만들고 TodoList 컴포넌트에 연결

//---
// 필터 상태 추가 (useState(filter))
// todos를 필터링해서 보여주기
// "전체 / 진행 중 / 완료" 버튼 추가 & 기능 연결
// "완료된 항목 삭제" 버튼 추가
