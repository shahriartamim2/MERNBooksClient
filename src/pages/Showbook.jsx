import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "@/components/BackButton";
import Spinner from "@/components/spinner";
import { Link } from "react-router-dom";

const Showbook = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://track-books.onrender.com/books/${id}`)
      .then((response) => {
        setLoading(false);
        setBook(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="m-5">
        <BackButton />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-sm max-h-full rounded-lg overflow-hidden shadow-lg  bg-slate-400 mx-auto my-auto p-10 text-neutral-50 my-8">
          <img
            className="w-full h-60 object-cover"
            src={
              "https://static-01.daraz.com.bd/p/8d1e90ff12b7022a5489e2835bf0197c.jpg_300x0q75.webp"
            }
            alt={book.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900">
              {book.name}
            </div>
            <p className="text-gray-700 text-base">Author: {book.author}</p>
            <p className="text-gray-700 text-base">
              Publish Year: {book.publishYear}
            </p>
            <p className="text-gray-700 text-base mt-2">{book.description}</p>
          </div>
          <div className="px-6 pt-1 pb-2 flex justify-between">
            <Link
              to={`/books/edit/${book._id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Edit
            </Link>
            <Link
              to={`/books/delete/${book._id}`}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Delete
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Showbook;
