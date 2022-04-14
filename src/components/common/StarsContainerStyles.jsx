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
  color: rgba(222, 99, 23, .8);
  &:before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(90deg, rgba(222, 99, 23, .8) ${(props) => (props.rating / 5) * 100}%, rgba(73, 80, 87, .8) ${(props) => (props.rating / 5) * 100}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;