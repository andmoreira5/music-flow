const person = [
  { name: "Nome completo:", field: "name", type: "text", required: true },
  {
    name: "Data de nascimento",
    field: "dateOfBirth",
    type: "date",
    required: true,
  },
  { name: "Endereço", field: "address", type: "text", required: true },
  { name: "Contato", field: "contact", type: "text", required: true },
];

export const columns = {
  student: person,
  professor: person,
};
