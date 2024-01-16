import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/Components";

const Employee = () => {
  const { id } = useParams();
  const isEditMode = id !== undefined;

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Employee {isEditMode ? "(Edit Mode)" : ""}</h1>
      <Button variant={"destructive"} onClick={handleCancel}>
        Cancel
      </Button>
    </>
  );
};

export default Employee;
