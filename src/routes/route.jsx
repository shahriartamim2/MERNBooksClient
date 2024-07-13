
import Createbook from "@/pages/Createbook";
import Deletebook from "@/pages/Deletebook";
import Editbook from "@/pages/Editbook";
import Homepage from "@/pages/Homepage";
import Showbook from "@/pages/Showbook";
import {Route, Routes } from "react-router-dom";


const Index = () => {
  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<Homepage />} />
        <Route path="/books/details/:id" element={<Showbook />} />
        <Route path="/books/create" element={<Createbook />} />
        <Route path="/books/edit/:id" element={<Editbook />} />
        <Route path="/books/delete/:id" element={<Deletebook />} />
      </Routes>

  );
};

export default Index;

