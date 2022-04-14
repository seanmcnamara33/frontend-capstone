import styled from 'styled-components';


// Image Gallery Styles
export const ImageGalleryComponent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  background-color: grey;
  box-shadow: 0 0 5px black;
  border-radius: 10px;
  margin: 20px 40px 40px 60px;
  min-height: 100%;
  max-height: 100%;
  width: 65%;
`;

// Thumbnail Carousel Styles
export const ThumbnailContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Thumbnail = styled.img `
  object-fit: cover;
  min-height: 55px;
  min-width: 55px;
  max-height: 55px;
  max-width: 55px;
  opacity: 70%;
  border: 1px solid black;
  box-shadow: -0px 0px 3px black;
  border-radius: 10px;
  margin: 5px;
`;
export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectedThumbnail = styled.img `
  object-fit: cover;
  min-height: 55px;
  min-width: 55px;
  max-height: 55px;
  max-width: 55px;
  border: 1px solid rgb(222, 99, 23);
  box-shadow: -0px 0px 3px rgb(222, 99, 23);
  border-radius: 10px;
  margin: 5px;
  margin-bottom: 2px;
`;

export const SelectedThumbnailUnderline = styled.div `
  height: 3px;
  width: 55px;
  border-bottom: 3px solid rgb(222, 99, 23);
  box-shadow: -1px 1px 1px rgb(222, 99, 23);
  border-radius: 10px;
  margin-bottom: 5px;
`;

// Expanded View Styles
export const EntireExpandedView = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: grey;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  margin: 20px 60px 40px 60px;
`;

export const ExpandedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 80vh;
`;

export const ZoomedImage = styled.img`
  transform: scale(2.5);
  object-fit: contain;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  cursor: zoom-out;
`;

export const ZoomedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 5px black;
  border-radius: 10px;
  background-color: grey;
  padding: 60px;
  margin: 20px 60px 20px 60px;
  width: 100%;
  height: 85vh;
  overflow: hidden;
`;

export const ExpandedImage = styled.img`
  object-fit: contain;
  max-width: 95%;
  max-height: 95%;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  overflow: hidden;
  cursor: crosshair;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const Icon = styled.div`
  color: white;
  margin: 5px;
  text-shadow: 0px 0px 2px rgb(222, 99, 23);
  opacity: 50%;
  &:hover {
    opacity: 100%;
    text-shadow: 0px 0px 5px rgb(222, 99, 23);
  }
`;

export const SelectedIcon = styled.div`
  color: rgb(222, 99, 23);
  margin: 5px;
  text-shadow: 0px 0px 2px white;
  &:hover {
    text-shadow: 0px 0px 5px white;
  }
`;