import styled from "styled-components";

export const FeedbackList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

export const FeedbackItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackBtn = styled.button`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 700;
  width: 100px;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
  border: 2px solid;
  border-radius: 4px;
  cursor: pointer;
  transition: 500ms ease-in-out;
  &:hover,
  &:focus {
    background-color: black;
    color: #fff;
    border-color: grey;
  }
`;