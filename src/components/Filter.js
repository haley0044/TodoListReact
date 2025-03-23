import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.text};

  &:hover {
    opacity: 0.7;
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: red;
  margin-left: 12px;
  padding: 4px;

  &:hover {
    opacity: 0.7;
  }
`;

function Filter({ filter, setFilter, clearCompleted }) {
  return (
    <FilterContainer>
      <FilterButton onClick={() => setFilter("all")} active={filter === "all"}>
        모두
      </FilterButton>
      <FilterButton
        onClick={() => setFilter("active")}
        active={filter === "active"}
      >
        진행 중
      </FilterButton>
      <FilterButton
        onClick={() => setFilter("completed")}
        active={filter === "completed"}
      >
        완료됨
      </FilterButton>
      <ClearButton onClick={clearCompleted}>완료 항목 삭제</ClearButton>
    </FilterContainer>
  );
}

export default Filter;
