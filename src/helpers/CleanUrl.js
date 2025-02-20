export const cleanUrl = (url) => {
  const urlObj = new URL(url);
  // Duyệt qua tất cả các tham số trên URL
  Array.from(urlObj.searchParams.keys()).forEach((key) => {
    if (urlObj.searchParams.get(key) === 'undefined') {
      urlObj.searchParams.delete(key);
    }
  });
  return urlObj.toString();
};