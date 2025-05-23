export const getGreeting = () => {
  const currentTime = new Date().getHours();

  if (currentTime >= 5 && currentTime < 12) {
    return "BOM DIA";
  } else if (currentTime >= 12 && currentTime < 18) {
    return "BOA TARDE";
  } else {
    return "BOA NOITE";
  }
};
