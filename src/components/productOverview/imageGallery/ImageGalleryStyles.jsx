import styled from 'styled-components';


// Image Gallery Styles
export const ImageGalleryComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 20px 0px 40px 20px;
  height: 100%;
  width: 65%;
`;

// Default View Styles
export const DefaultGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  background-color: grey;
  box-shadow: 0 0 5px black;
  border-radius: 3px;
  height: 80vh;
  width: 75%;
`;

export const Image = styled.img `
  min-height: 100%;
  min-width: 75%;
  max-height: 100%;
  max-width: 75%;
  position: relative;
  box-shadow: 0 0 5px black;
  left: 40px;
  border-radius: 3px;
  cursor: zoom-in;
`;

// Thumbnail Carousel Styles
export const ThumbnailContainer = styled.div `
  height: 0;
  width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: -240px;
  left: 85px;
`;

export const Thumbnail = styled.img `
  min-height: 60px;
  min-width: 60px;
  max-height: 60px;
  max-width: 60px;
  opacity: 70%;
  border: 1px solid black;
  box-shadow: -0px 0px 3px black;
  border-radius: 3px;
  margin: 5px;
`;
export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectedThumbnail = styled.img `
  min-height: 60px;
  min-width: 60px;
  max-height: 60px;
  max-width: 60px;
  border: 1px solid rgb(222, 99, 23);
  box-shadow: -0px 0px 3px rgb(222, 99, 23);
  border-radius: 3px;
  margin: 5px;
  margin-bottom: 2px;
`;

export const SelectedThumbnailUnderline = styled.div `
  height: 3px;
  width: 60px;
  border-bottom: 3px solid rgb(222, 99, 23);
  box-shadow: -1px 1px 1px rgb(222, 99, 23);
  border-radius: 3px;
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
  border-radius: 3px;
  box-shadow: 0 0 5px black;
  margin: 20px 60px 40px 60px;
`;

export const ExpandedContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 60px;
  padding-right: 60px;
  width: 100%;
  height: 80vh;
`;

export const ZoomedImage = styled.img`
  transform: scale(2.5);
  object-fit: fill;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0 0 5px black;
  height: 100%;
  width: 50%;
  border-radius: 3px;
  overflow: hidden;
  cursor: zoom-out;
`;

export const ZoomedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0 5px black;
  border-radius: 3px;
  background-color: grey;
  padding: 60px;
  margin: 20px 60px 20px 60px;
  width: 100%;
  height: 85vh;
  overflow: hidden;
`;

export const ExpandedImage = styled.img`
  object-fit: fill;
  width: 50%;
  height: 100%;
  border-radius: 3px;
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