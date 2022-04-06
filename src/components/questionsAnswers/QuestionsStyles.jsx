/* eslint-disable */
import styled from 'styled-components';

export const AnswerList = styled.ul`
  list-style: none;
`;
export const Main = styled.div`
  margin: 1em;
  padding: 1em;
  border: 2px solid #000;
  display: flex;
  flex-flow: column;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin: 0.5em 0;
`;

export const List = styled.div(props => ({
  border: '2px solid #000',
  height: props.height,
  overflow: 'auto'
}))

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
`

export const Modal = styled.div(props=>({
  'z-index': 'auto',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  'align-content': 'center',
  display: props.show ? 'block' : 'none',
  'background': 'rgba(0,0,0,0.4)'
}))

export const Header = styled.div`
  padding: 5px 10px;
  text-align: center;
`

export const Content = styled.div`
  background: red;
  width: 500px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`