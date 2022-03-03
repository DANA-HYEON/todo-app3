import styled, { css } from 'styled-components';

export default function TodoTemplate({ children }) {
  return <TodoTemplateWrap>{children}</TodoTemplateWrap>;
}

const TodoTemplateWrap = styled.div`
  width: 600px;
  min-height: 400px;
  background-color: white;
  margin: auto;
  margin-top: 10rem;
`;
