import BusinessForm from "./components/BusinessForm";
import DisplayCard from "./components/DisplayCard";
import BusinessProvider from "./context/BusinessContext";

const App = () => {
  return (
    <BusinessProvider>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <BusinessForm />
        <DisplayCard />
      </div>
    </BusinessProvider>
  );
};
export default App;