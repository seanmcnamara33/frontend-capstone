import styled from 'styled-components';

// Overview Styles
export const ProductOverview = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const ProductInformation = styled.div`
  display: flex;
  width: 35%;
  height 83vh;
  flex-direction: column;
  box-sizing: border-box;
  margin: 20px 40px 20px 0px;
  justify-content: space-between;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


export const CartFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const AddToCartFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StarButton = styled.button`
  all: unset;
  width: 15%;
  background-color: white;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 0 2px black;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  text-align: center;
  height: 100%;
  &:hover {
    box-shadow: 0 0 5px rgb(222, 99, 23);
    color: rgb(222, 99, 23);
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 80px;
  margin-right: 80px;
`;

// Product Info Styles
export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid black;
  margin-left: 80px;
  padding-right: 20px;
  width: 50%;
  box-sizing: border-box;
`;

export const ProductDescriptionTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: underline;
`;

// Icon List Styles
export const IconListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const Icon = styled.div`
  margin: 5px;
`;