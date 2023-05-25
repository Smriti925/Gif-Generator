import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full flex flex-col background p-10">
      <h1 className="bg-white rounded-xl p-4 text-center text-xl w-full">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center p-10 gap-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
