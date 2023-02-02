import styled from "styled-components";

export const Atags = styled.a`
  font-size: 12px;
  color: ${(props) => (props.selected ? "white" : props.color)};
  background-color: ${(props) => (props.selected ? props.color : "transparent")};
  border: 1px solid ${(props) => props.background};
  border-radius: 5px;
  padding: .25rem;
  width: auto;
  text-decoration: none;
  height: auto;
  bottom: 0;
  margin: 2px;
  cursor: pointer;
  :hover {
    background: ${(props) => props.color};
    color: white;
  }
`