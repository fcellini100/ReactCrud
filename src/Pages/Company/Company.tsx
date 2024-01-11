import { useNavigate } from "react-router-dom";
import { Button } from "../../Components";

const Company = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Company</h1>
      <Button label="Cancel" color="red-500" onClick={handleCancel}></Button>
    </>
  );
};

export default Company;
