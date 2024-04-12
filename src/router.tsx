import { Route, Routes } from "react-router-dom";
import { ReactElement } from "react";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import TaskDetails from "./pages/TaskDetails";

const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id" element={<TaskDetails />} />
\      <Route path="/add" element={<AddTask />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
