import BackButton from "@/components/BackButton";
import Spinner from "@/components/spinner";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Createbook = () => {
  const {id} = useParams();
  const [book, setBook] = useState({
    name: "",
    author: "",
    publishYear: "",
    description: "",
  });
  const { name, author, publishYear, description } = book;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .put(`https://track-books.onrender.com/books/${id}`, book)
      .then(() => {
        setLoading(false);
        navigate("/books");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <BackButton />
      <div className="max-w-lg mx-auto my-10 p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Book Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="publishYear"
            >
              Publish Year
            </label>
            <input
              type="number"
              id="publishYear"
              name="publishYear"
              value={publishYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              disabled={loading}
            >
              {loading ? <Spinner/> : "Update book"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Createbook;
