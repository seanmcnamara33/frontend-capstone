/* eslint-disable */
import styled from 'styled-components';

export const List = styled.div(props => ({
  height: props.height,
  overflow: 'auto',
  'max-height': '50vh',
  'margin-top': '5px'
}))

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
`

export const FormInner = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0.5em;
`
export const FlexHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 20px;
`;