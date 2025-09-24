import "./App.css";
import "./router/AppRoutes";
// import AppRoutes from "./router/AppRoutes";
import { RouterProvider } from "react-router";
import router from "./router";

function App() {
  return (
    <>
      {/* <AppRoutes /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
