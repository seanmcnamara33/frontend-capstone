/* eslint-disable */
import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  height: 3em;
  background: rgb(222, 99, 23);
  color: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

export const Modal = styled.div(props=>({
  'z-index': 'auto',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  display: props.show ? 'flex' : 'none',
  'justify-content': 'center',
  'align-items': 'center',
  'background': 'rgba(0,0,0,0.4)'
}))

export const Header = styled.div`
  background: red;
  color: white;
  width: 100%;
  border-radius: 20px 20px 0 0;
  text-align: center;
`

export const Content = styled.div`
  background: #ccc;
  width: 500px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 2px solid #000;
  border-radius: 20px;
`
