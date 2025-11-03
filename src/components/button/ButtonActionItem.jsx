export default function ButtonActionItem({ children, onClick, color }) {
  return (
    <button
      className={`font-bold flex items-center justify-center cursor-pointer w-40
                    p-3 sm:p-2 px-7 sm:px-3 text-white rounded-full space-x-2  ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
