import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: green;
    color: var(--mainblue);
  }
  &:focus {
    outline: none;
  }
`;
