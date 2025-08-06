export const validateContact = (contact) => {
  const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return regex.test(contact);
};
