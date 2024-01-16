import { Button } from "@/Components";
import { Link, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("new");
  };

  return (
    <>
      <div className="w-full">
        <Button variant={"outline"} onClick={handleClick}>
          + Create Employee
        </Button>
      </div>
      <div className="w-full flex flex-col gap-2 border border-gray-400 rounded-md shadow-md p-3 mt-4">
        <Link className="hover:bg-gray-200 rounded-md p-1" to={"1"}>
          Employee 1
        </Link>
        <Link className="hover:bg-gray-200 rounded-md p-1" to={"2"}>
          Employee 2
        </Link>
        <Link className="hover:bg-gray-200 rounded-md p-1" to={"3"}>
          Employee 3
        </Link>
        <Link className="hover:bg-gray-200 rounded-md p-1" to={"4"}>
          Employee 4
        </Link>
      </div>
    </>
  );
};

export default EmployeeList;
