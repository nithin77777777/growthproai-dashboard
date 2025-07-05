import { useContext } from "react";
import axios from "axios";
import { BusinessContext } from "../context/BusinessContext";
import Spinner from "./Spinner";

const DisplayCard = () => {
  const { data, setData, loading, setLoading } = useContext(BusinessContext);
  if (!data) return null;

  const regenerateHeadline = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/regenerate-headline?name=${data.name}&location=${data.location}`
      );
      setData({ ...data, headline: res.data.headline });
    } catch (err) {
      console.error("Regeneration error:", err);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 mt-6 rounded shadow-md w-full max-w-md mx-auto animate-slide-in">
      <h2 className="text-xl font-bold mb-1">{data.name}</h2>
      <p className="text-gray-600 mb-2">{data.location}</p>
      <div className="flex items-center mb-2">
        <span className="text-2xl font-bold">{data.rating}</span>
        <span className="text-yellow-500 ml-1">★</span>
        <span className="ml-2 text-gray-600">({data.reviews} reviews)</span>
      </div>
      <p className="italic text-gray-700 mb-4">{`“${data.headline}”`}</p>
      {loading ? (
        <Spinner />
      ) : (
        <button
          onClick={regenerateHeadline}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          🔄 Regenerate SEO Headline
        </button>
      )}
    </div>
  );
};
export default DisplayCard;