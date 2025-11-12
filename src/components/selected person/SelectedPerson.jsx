import CardPerson from "../../components/card/CardPerson.jsx";

export default function SelectedPersons({ students, professors }) {
  return (
    <div className="mt-10">
      {professors?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-gray-300 font-bold text-lg mb-2">
            Selected Professors
          </h2>
          <div
            data-testid="selectedTeachers"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {professors.map((prof) => (
              <CardPerson key={prof.id} item={prof} showButtons={false} />
            ))}
          </div>
        </div>
      )}

      {students?.length > 0 && (
        <div>
          <h2 className="text-gray-300 font-bold text-lg mb-2">
            Selected Students
          </h2>
          <div
            data-testid="selectedStudents"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {students.map((student) => (
              <CardPerson key={student.id} item={student} showButtons={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
