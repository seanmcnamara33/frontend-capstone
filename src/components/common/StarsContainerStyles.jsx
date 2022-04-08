import styled from 'styled-components';

// Star Review Styles
export const StarsAndReviews = styled.div`
  display: flex;
`;

export const Star = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: .5px .5px 1px rgb(222, 99, 23);
  color: rgb(222, 99, 23);
`;

export const ReviewLink = styled.p`
  margin: 10px;
  text-decoration: underline;
  font-size: .75rem;
`;

export const MergeStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FirstStarPortion = styled.div`
  text-shadow: .5px .5px 1px rgb(222, 99, 23);
`;

export const SecondStarPortion = styled.div`
  position: relative;
  right: 16px;
  margin-right: -16px;
  color: rgb(222, 99, 23);
  text-shadow: .5px .5px 1px rgb(222, 99, 23);
`;
