export default function ButtonMenuWithIcon({ item }) {
  const Icon = item.icon;

  return (
    <button
      className={` ${item.color} sm:gap-5 rounded-lg flex-col sm:flex-row flex
                        text-nowrap cursor-pointer justify-center p-5 items-center
                        text-white font-bold ml-3 `}
      onClick={item.onClick}
    >
      <Icon color="white" size={40} />
      {item.label}
    </button>
  );
}
