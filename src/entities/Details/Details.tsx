import { useParams } from "react-router-dom";

export const Details = () => {
  const { itemId } = useParams();

  return (
    <div className="bg-gray-100 p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Details Component: {itemId}</h2>
      <p className="text-gray-700">
        Here is some test content for the details component.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        Close Details
      </button>
    </div>
  );
};
