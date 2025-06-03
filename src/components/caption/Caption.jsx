function Caption({ description, detailing }) {
  return (
    <div
      className=" text-center mt-12 mb-5 flex flex-col 
          dark:text-white text-sky-800 border-b-0 border-white"
    >
      <span className="font-bold text-xl border-b-2 mb-3 pb-3">
        {description}
      </span>
      <span className="opacity-70  text-lg">{detailing}</span>
    </div>
  );
}

export default Caption;
