export const maskPhone = (value) => {
  let numbers = value.replace(/\D/g, "").substring(0, 11);
  if (numbers.length > 6) {
    return `(${numbers.substring(0, 2)}) ${numbers.substring(
      2,
      7
    )}-${numbers.substring(7)}`;
  } else if (numbers.length > 2) {
    return `(${numbers.substring(0, 2)}) ${numbers.substring(2)}`;
  } else if (numbers.length > 0) {
    return `(${numbers}`;
  }
  return "";
};
