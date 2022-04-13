import styled from 'styled-components';

// Add To Cart Styles
export const AddToCartButton = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 0 2px black;
  text-decoration:none;
  text-align: center;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  &:hover {
    box-shadow: 0 0 5px rgb(222, 99, 23);
    color: rgb(222, 99, 23);
  }
`;