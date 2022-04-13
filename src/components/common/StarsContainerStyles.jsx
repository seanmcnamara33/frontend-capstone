import styled from 'styled-components';

// Star Review Styles
export const StarsAndReviews = styled.div`
  display: flex;
  align-items: center;
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

export const AllStars = styled.div`
  color: rgb(222, 99, 23);
  &:before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(90deg, rgb(222, 99, 23) ${(props) => (props.rating / 5) * 100}%, grey ${(props) => (props.rating / 5) * 100}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;