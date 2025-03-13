import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export default Input;
