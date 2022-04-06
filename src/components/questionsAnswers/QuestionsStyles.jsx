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
  display: props.display,
  posititon: 'fixed',
  'z-index': '2000',
  left: 0,
  top: 0,
  width: '100%',
  hieght: '100%',
  overflow: 'auto',
  'background-color': 'rba(0,0,0,0.4)'
}))

export const Header = styled.div`
  padding: 5px 10px;
  text-align: center;
`

export const Content = styled.div`
  posistion: relative;
  margin: auto;
  border: 2px solid #000;
  width: 80%;
  boder-radius: 20px;
`