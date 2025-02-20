export const createImageURL = (url) => {
  return url?.includes('https://phimimg.com/') ? url : "https://phimimg.com/" + url;
}