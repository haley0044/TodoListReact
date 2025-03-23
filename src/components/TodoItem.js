import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.medium};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TodoText = styled.span`
  font-size: ${(props) => props.theme.typography.body};
  flex: 1;
  text-align: start;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) =>
    props.completed ? props.theme.colors.muted : props.theme.colors.text};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: red;

  &:hover {
    opacity: 0.7;
  }
`;

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <TodoWrapper>
      <TodoContent>
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <TodoText completed={todo.completed}>{todo.text}</TodoText>
      </TodoContent>
      <DeleteButton onClick={() => removeTodo(todo.id)}>❌</DeleteButton>
    </TodoWrapper>
  );
}

export default TodoItem;
