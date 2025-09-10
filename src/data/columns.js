const person = [
  { name: "Full Name", field: "name", type: "text", required: true },
  { name: "Date of Birth", field: "dateOfBirth", type: "date", required: true },
  { name: "Address", field: "address", type: "text", required: true },
  { name: "Contact", field: "contact", type: "text", required: true },
];

export const columns = {
  student: person,
  professor: person,
};
