/* eslint-disable */
import styled from 'styled-components';

export const AnswerList = styled.ul`
  list-style: none;
`;

export const PhotoList = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Thumbnail = styled.img.attrs(props=>({
  src: `${props.photo}`
}))`
  height: 5em;
  width: 5em;
  border: 2px solid #ccc;
  border-radius: 20px;
  margin: 5px;
`;

export const FormInner = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0.5em;
`