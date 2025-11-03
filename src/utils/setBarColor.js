export const setBarColor = (color) => {
  const metaThemeColor = document.querySelector("meta[name='theme-color']");
  metaThemeColor.setAttribute("content", color);
};
