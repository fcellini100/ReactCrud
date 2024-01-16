import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/Components";

const Company = () => {
  const { id } = useParams();
  const isEditMode = id !== undefined;

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Company {isEditMode ? "(Edit Mode)" : ""}</h1>
      <Button variant={"destructive"} onClick={handleCancel}>
        Cancel
      </Button>
    </>
  );
};

export default Company;
