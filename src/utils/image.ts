export const getImageOrDefault = (imgUrl: string) => {
  if (!imgUrl) {
    return '/defaultProfileImg.jpg';
  }
  return imgUrl;
};
