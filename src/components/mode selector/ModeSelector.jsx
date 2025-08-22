export default function ModeSelector({ mode, setMode }) {
  return (
    <div className="mt-8 text-center">
      <span className="text-gray-300 font-bold mr-4">Modo de inserção:</span>
      <button
        type="button"
        onClick={() => setMode("student")}
        className={`px-4 py-2 rounded-l-lg ${
          mode === "student" ? "bg-green-700" : "bg-gray-500"
        } text-white font-semibold cursor-pointer`}
      >
        Alunos
      </button>
      <button
        type="button"
        onClick={() => setMode("professor")}
        className={`px-4 py-2 rounded-r-lg ${
          mode === "professor" ? "bg-green-700" : "bg-gray-500"
        } text-white font-semibold cursor-pointer`}
      >
        Professores
      </button>
    </div>
  );
}
