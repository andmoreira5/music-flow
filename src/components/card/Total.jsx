export default function Total({ quantity, subtitle }) {
  return (
    <div
      data-testid="Total"
      className="flex items-center justify-center flex-col dark:text-white text-gray-800 "
    >
      <div data-testid="quantityTotal" className="text-5xl font-bold">
        {quantity}
      </div>
      <div data-testid="subtitleTotal" className=" p-1">
        {subtitle}
      </div>
    </div>
  );
}
