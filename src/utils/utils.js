export const getRandomNum = (ceiling) => Math.floor(Math.random()*ceiling + 1);
export const cutBigString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })};