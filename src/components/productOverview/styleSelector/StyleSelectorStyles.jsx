import styled from 'styled-components';

// Styles Row Styles
export const StyleCircleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  margin: 10px;
  margin-left: 0px;
`;

export const StyleCircle = styled.img`
  object-fit: cover;
  height: 60px;
  width: 60px;
  opacity: 70%;
  margin-right: 10px;
  border: 1px solid black;
  box-shadow: 0 0 3px black;
  border-radius: 50%;
  &:hover {
    box-shadow: 0 0 10px rgb(59, 167, 184);
  }
`;

export const StyleCircleSelected = styled.img`
  object-fit: cover;
  height: 60px;
  width: 60px;
  margin-right: 10px;
  border: 1px solid rgb(222, 99, 23);
  box-shadow: 0 0 3px rgb(222, 99, 23);
  border-radius: 50%;
`;

export const SelectSizing = styled.div`
  width: 80%;
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  text-align: start;
`;

export const SelectPlaceholder = styled.div`
  color: black;
`;

// Select Size Styles
export const SizeDiv = styled.div`
  -webkit-appearance: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 40px;
  width: 60%;
  background-color: rgb(248, 249, 250);
  color: black;
  padding:0.35em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 2px black;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  &:hover {
    box-shadow: 0 0 5px rgb(59, 167, 184);
  }
`;

// Select Quantity Styles
export const QuantityDiv = styled.div`
  align-self: end;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 40px;
  width: 35%;
  padding:0.35em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 2px black;
  background-color: rgb(248, 249, 250);
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  &:hover {
    box-shadow: 0 0 5px rgb(59, 167, 184);
  }
`;

export const CircleCheck = styled.div `
  height: 0;
  width: 0;
  position: relative;
  color: rgb(222, 99, 23);
  right: -48px;
  top: -68px;
`;