import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const BackButton = () => {
  return (
    <Button className="bg-black text-white ring-4">
      <Link to="/">Back</Link>
    </Button>
  );
};

export default BackButton;
