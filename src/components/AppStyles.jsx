/* eslint-disable */
import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  height: 3em;
  background: rgba(222, 99, 23, .8);
  color: rgb(248, 249, 250);
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background: rgba(222, 99, 23, .8);
  color: (248, 249, 250);
  width: 100%;
  border-radius: 10px 10px 0 0;
  text-align: center;
`

export const Content = styled.div`
  background: rgb(248, 249, 250);
  width: 600px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 2px solid #000;
  border-radius: 10px;
`

export const MainBtn = styled.button(props=>({
  border: '1px solid #000',
  'border-radius': '5px',
  background: 'rgb(59, 167, 184)',
  color: 'rgb(248, 249, 250)',
  padding: '5px',
  margin: '5px',
  '&:hover' : {
    background: 'rgb(248, 249, 250)',
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
  background: 'rgb(248, 249, 250)',
  color: '#000',
  padding: '10px',
  margin: '10px',
  '&:hover' : {
    background: '#000',
    color: 'rgb(248, 249, 250)',
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

export const Dark = styled.div(props=>({
  background: props.dark ? 'rgba(0, 0, 0, 0.8)' : 'rgb(248, 249, 250)',
  color: props.dark ? '#FFF': '#000'
}))

export const DarkModeBtn = styled.div `
  all: unset;
  display: flex;
  background-color: rgb(248, 249, 250);
  color: black;
  justify-content: space-between;
  align-items: center;
  font-size: small;
  height: max-content;
  width: max-content;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 0 2px black;
  text-decoration:none;
  text-align: center;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  &:hover {
    box-shadow: 0 0 5px rgb(59, 167, 184);
  }
`