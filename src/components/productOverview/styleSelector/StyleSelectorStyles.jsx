import styled from 'styled-components';

// Styles View Styles

// Style Selector Styles

// Styles Row Styles
export const StyleCircleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  margin: 10px;
  margin-left: 0px;
`;

export const StyleCircle = styled.img`
  height: 60px;
  width: 60px;
  opacity: 70%;
  margin-right: 10px;
  border: 1px solid black;
  box-shadow: 0 0 3px black;
  border-radius: 50%;
`;

export const StyleCircleSelected = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  border: 1px solid rgb(222, 99, 23);
  box-shadow: 0 0 3px rgb(222, 99, 23);
  border-radius: 50%;
`;

// Select Size Styles
export const SizeDiv = styled.div`
  -webkit-appearance: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 50%;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 3px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 2px black;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  &:hover {
    box-shadow: 0 0 5px rgb(222, 99, 23);
  }
`;

// Select Quantity Styles
export const QuantityDiv = styled.div`
  align-self: end;
  width: 25%;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 3px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 2px black;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  &:hover {
    box-shadow: 0 0 5px rgb(222, 99, 23);
  }
`;