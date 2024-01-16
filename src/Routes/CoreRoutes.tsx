import { Routes, Route } from "react-router-dom";
import {
  Company,
  CompanyList,
  Employee,
  EmployeeList,
  Home,
  PageNotFound,
} from "@/Pages";

const CoreRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="companies">
          <Route index element={<CompanyList />} />
          <Route path="new" element={<Company />} />
          <Route path=":id" element={<Company />} />
        </Route>

        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path="new" element={<Employee />} />
          <Route path=":id" element={<Employee />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default CoreRoutes;
