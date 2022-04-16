import styled from 'styled-components';

// Add To Cart Styles
export const AddToCartButton = styled.button`
  all: unset;
  display: flex;
  background-color: rgb(248, 249, 250);
  color: black;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
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
    color: rgb(59, 167, 184);
  }
`;

export const Item = styled.div `
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const ItemName = styled.div `
  margin: 5px;
`;

export const ItemCount = styled.div `
  margin: 5px;
`;

export const RemoveItemButton = styled.button `
  all: unset;
  &:hover {
    color: rgb(222, 99, 23);
  }
`;

export const CloseModalButton = styled.button `
  all: unset;
  margin-top: 10px;
  color: black;
  &:hover {
    text-shadow: 0 0 3px rgb(59, 167, 184);
  }
`;

export const ButtonContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;