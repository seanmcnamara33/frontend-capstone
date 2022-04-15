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
  width: 80%;
`;

export const AddToCartFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
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

export const Price = styled.div `
  display: flex;
`

export const SalePrice = styled.p `
  color: red;
  font-weight: bold;
  font-family:'Roboto', sans-serif;
`

export const OriginalPrice = styled.p `
  text-decoration: line-through;
  font-family: 'Roboto', sans-serif;
  margin-right: 5px;
`

export const OriginalPriceNoSale = styled.p `
  font-weight: bold;
  font-family:'Roboto', sans-serif;
`
export const Category = styled.p `
  margin-bottom: 0;
`

export const ProductName = styled.h2 `
  margin-top: 0;
`

export const CartIcon = styled.button `
  all: unset;
  &:hover {
    color: rgb(59, 167, 184);
  }
`;