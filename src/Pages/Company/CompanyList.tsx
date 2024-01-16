import { Button } from "@/Components";
import { Link, useNavigate } from "react-router-dom";

const CompanyList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("new");
  };

  return (
    <>
      <div className="w-full">
        <Button variant={"outline"} onClick={handleClick}>
          + Create Company
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 border border-gray-400 rounded-md shadow-md p-3 mt-4 items-center justify-center">
        <Link className="hover:bg-gray-200 rounded-md p-1 text-center" to={"1"}>
          Company 1
        </Link>
        <Link className="hover:bg-gray-200 rounded-md p-1 text-center" to={"2"}>
          Company 2
        </Link>
        <Link className="hover:bg-gray-200 rounded-md p-1 text-center" to={"3"}>
          Company 3
        </Link>
        <Link className="hover:bg-gray-200 rounded-md p-1 text-center" to={"4"}>
          Company 4
        </Link>
      </div>
    </>
  );
};

export default CompanyList;
