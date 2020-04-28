import styled from "styled-components";


export const Button = styled.button`
background:transparent;
border:none;
cursor:pointer;
color:white;
transition:all 0.2s ease-in-out;
&:hover{
  color:gray;
}
&:focus{
  outline:none;
}
`;