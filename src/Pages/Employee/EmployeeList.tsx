import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

const EmployeeList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("new");
  };

  return (
    <>
      <div className="w-full">
        <Button
          label="+ Create Employee"
          color="blue-500"
          onClick={handleClick}
        />
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
