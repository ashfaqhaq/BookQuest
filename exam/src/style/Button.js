import styled, { css } from "styled-components";
export const ButtonSelf = styled.button`
  font-size: 16px;
  display: inline-block;
  border-radius: 2em;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 0.1em solid black;

  ${props =>
    props.primary &&
    css`
      background: lightyellow;
      color: palevioletred;
      
    `}
    ${props =>
        props.second &&
        css`
          background: palevioletred;
          color: lightyellow;
        `}
`;
