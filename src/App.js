import styled, { ThemeProvider } from "styled-components";
import theme, { GlobalStyles } from "./styles/theme";
import Button from "./components/Button";
import Filter from "./components/Filter";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.small};
  margin: ${(props) => props.theme.spacing.large} 0;
`;

function App() {
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
        <h1>TODO LIST</h1>
        <InputContainer>
          <Input placeholder="할 일을 입력하세요" />
          <Button>추가</Button>
        </InputContainer>
        <Filter />
      </div>
    </ThemeProvider>
  );
}

export default App;
