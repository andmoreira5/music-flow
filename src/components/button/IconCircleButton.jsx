export default function IconCircleButton({
  children,
  label,
  onClick,
  selected,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        text-gray-300 flex flex-col justify-center items-center cursor-pointer
        w-24 h-24 rounded-full border
        ${selected ? "bg-gray-700 border-gray-700" : "border-gray-400"}
      `}
    >
      <div>{children}</div>
      <span
        className={(selected ? " font-bold text-white" : "") + " text-base"}
      >
        {label}
      </span>
    </div>
  );
}
