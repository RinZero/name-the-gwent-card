import styled from "styled-components";

export default styled.a`
  color: inherit;
  font: inherit;
  border: none;
  border-radius: 0;
  background: transparent;
  padding: 0;
  margin: 0;

  display: inline;
  cursor: pointer;
  color: #f3c053;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;
