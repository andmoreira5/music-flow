import { ClipLoader } from "react-spinners";

export default function MiniLoader() {
  return (
    <div className="w-full flex mt-5 justify-center">
      <ClipLoader color="white" size={30} />
    </div>
  );
}
