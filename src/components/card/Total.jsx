export default function Total({ quantity, subtitle }) {
  return (
    <div className="flex items-center justify-center flex-col dark:text-white ">
      <div className="text-5xl font-bold">{quantity}</div>
      <div className=" p-1">{subtitle}</div>
    </div>
  );
}
