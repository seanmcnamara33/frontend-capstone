/* eslint-disable */
import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  height: 3em;
  background: rgba(222, 99, 23, .8);
  color: rgb(248, 249, 250);
  margin: 0 60px 0 60px;
  padding-left: 20px;
  display: inline-block;
  line-height: 3em;
  font-size: 24px;
  box-shadow: 0 0 5px black;
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
  background: rgb(222, 99, 23);
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

export const MainBtn = styled.button(props=>({
  border: '1px solid #000',
  'border-radius': '5px',
  background: 'rgb(59, 167, 184)',
  color: '#fff',
  padding: '5px',
  margin: '5px',
  '&:hover' : {
    background: '#fff',
    color: 'rgb(59, 167, 184)',
    'box-shadow': '0 0 5px rgb(59, 167, 184)'
  },
  '&:active' : {
    'box-shadow': '0 0 5px rgb(222, 99, 23)',
    color: 'rgb(222, 99, 23)'
  }
}))

export const CloseBtn = styled.button(props=>({
  border: '1px solid #000',
  'border-radius': '5px',
  background: '#fff',
  color: '#000',
  padding: '10px',
  margin: '10px',
  '&:hover' : {
    background: '#000',
    color: '#fff',
    'box-shadow': '0 0 5px #000'
  },
  '&:active' : {
    'box-shadow': '0 0 5px rgb(222, 99, 23)',
    color: 'rgb(222, 99, 23)'
  }
}))

export const FieldError = styled.p`
  color: red;
  font-weight: bold;
`