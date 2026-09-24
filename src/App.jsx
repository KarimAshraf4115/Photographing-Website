import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true , element: <Home></Home>},
      { path: "blog", element: <Blog></Blog> },
      { path: "about", element: <About></About> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
