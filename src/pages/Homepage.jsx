import Spinner from "@/components/spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://track-books.onrender.com/books")
      .then((response) => {
        setLoading(false);
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1>Books List</h1>
          <Link to="/books/create" className="bg-slate-300 p-1">
            Create new
          </Link>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {loading ? (
              <Spinner />
            ) : (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Index
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Book name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Publish Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Info
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Edit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((item, index) => (
                    <tr
                      key={item._id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.author}</td>
                      <td className="px-6 py-4">{item.publishYear}</td>
                      <td className="px-6 py-4">
                        {" "}
                        <Link
                          to={`/books/details/${item._id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Info
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to={`/books/edit/${item._id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to={`/books/delete/${item._id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
