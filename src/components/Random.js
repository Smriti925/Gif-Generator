import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random() {
  //custom hook
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-blue-600 rounded-xl flex flex-col items-center">
      <h1 className="p-2 font-bold text-xl">A RANDOM GIF</h1>
      {loading ? <Spinner /> : <img src={gif} alt="gif"></img>}
      <button
        onClick={() => {
          fetchData();
        }}
        className="py-2 px-4 bg-blue-300 rounded-xl m-2"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
