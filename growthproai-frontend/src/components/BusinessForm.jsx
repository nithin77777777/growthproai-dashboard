import { useContext, useState } from "react";
import axios from "axios";
import { BusinessContext } from "../context/BusinessContext";

const BusinessForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const { setData, setLoading } = useContext(BusinessContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !location) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/business-data", {
        name,
        location,
      });
      setData(res.data);
    } catch (err) {
      console.error("Submission error:", err);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto animate-fade-in"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
        📊 Local Business SEO Dashboard
      </h1>
      <input
        type="text"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};
export default BusinessForm;