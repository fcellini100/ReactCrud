import "./App.css";
import { Navbar } from "./Components";
import { CoreRoutes } from "./Routes";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container m-auto mt-4 p-4">
        <CoreRoutes />
      </div>
    </>
  );
};

export default App;
