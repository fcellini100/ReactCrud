import { useNavigate } from "react-router-dom";
import { Button } from "../../Components";

const Employee = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Employee</h1>
      <Button label="Cancel" color="red-500" onClick={handleCancel}></Button>
    </>
  );
};

export default Employee;
