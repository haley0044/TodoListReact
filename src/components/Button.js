import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 40%;
  padding: ${(props) => props.theme.spacing.medium};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease-in-out;
  font-size: ${(props) => props.theme.typography.body};
  font-weight: bold;
  line-height: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  &:hover {
    background: ${(props) => props.theme.colors.primaryhover};
  }
`;

export default Button;
