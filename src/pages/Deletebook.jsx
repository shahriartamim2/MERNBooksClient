import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "@/components/spinner";

const Deletebook = () => {
  const navigate = useNavigate();
    const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const DeleteBook = ()=>{
    setLoading(true);
    axios
      .delete(`https://track-books.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="max-w-md mx-auto my-10 p-8 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Do you want to delete the book?
      </h1>
      <div className="flex justify-between">
        {loading ? (
          <Spinner />
        ) : (
          <button
            onClick={DeleteBook}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Deletebook;
