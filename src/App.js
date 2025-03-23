import { ThemeProvider } from "styled-components";
import theme, { GlobalStyles } from "./styles/theme";
import Button from "./components/Button";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import styled from "styled-components";
import { useTodos } from "./hooks/useTodos";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.small};
  margin: ${(props) => props.theme.spacing.large} 0;
`;

function App() {
  const {
    todos,
    inputValue,
    setInputValue,
    isComposing,
    setIsComposing,
    filter,
    setFilter,
    addTodo,
    toggleComplete,
    removeTodo,
    clearCompleted,
  } = useTodos(); // ✅ 상태 로직을 useTodos()에서 가져옴

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          minWidth: "375px",
          margin: "auto",
        }}
      >
        <h1>🚀 TODO LIST</h1>

        <InputContainer>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isComposing) {
                e.preventDefault();
                addTodo();
              }
            }}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            placeholder="할 일을 입력하세요"
          />
          <Button onClick={addTodo}>추가</Button>
        </InputContainer>

        <Filter
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
