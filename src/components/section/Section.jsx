export default function Section({ title, children }) {
  return (
    <div className="bg-white/50 w-full p-5 rounded-2xl ">
      <div className="font-bold dark:text-slate-800 text-sky-800 border-b-2 mb-4 pb-4">
        {title}
      </div>
      <div className="flex gap-5">{children}</div>
    </div>
  );
}
