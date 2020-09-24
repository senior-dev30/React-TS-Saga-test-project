import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-size: 0.9em;
  padding: 6px 16px;
  background-color: #e8ebee;
  color: #4c4f50;
  border-radius: 4px;
  border: #e8ebee;
  height: 30px;
  width: 100%;
  cursor: default;
  outline: none;
  :hover {
    background-color: #1c3e55;
    color: #ffffff;
    border: #1c3e55;
    box-shadow: 0px 2px 2px #d2d8dd;
  }
`;

export const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: initial;
`;
