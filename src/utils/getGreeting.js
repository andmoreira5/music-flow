export const getGreeting = () => {
  const currentTime = new Date().getHours();
  if (currentTime >= 5 && currentTime < 12) {
    return "GOOD MORNING";
  } else if (currentTime >= 12 && currentTime < 18) {
    return "GOOD AFTERNOON";
  } else {
    return "GOOD EVENING";
  }
};
