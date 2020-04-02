import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  height: 3.5rem;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.lightBlue};
  cursor: pointer;
`;
