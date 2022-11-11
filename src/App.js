import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Services from "./components/Services/Services";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Error from "./components/Error/Error";

import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AddServices from "./components/AddServices/AddServices";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Reviews from "./components/Reviews/Reviews";
import Addreview from "./components/Addreview/Addreview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/addservices",
          element: (
            <PrivateRoute>
              <AddServices></AddServices>
            </PrivateRoute>
          ),
        },
        {
          path: "/addreview/:id",
          element: <Addreview></Addreview>,
          loader: ({ params }) =>
            fetch(
              `https://video-editing-service-server.vercel.app/services/${params.id}`
            ),
        },
        {
          path: "/myreviews",
          element: (
            <PrivateRoute>
              <Reviews></Reviews>
            </PrivateRoute>
          ),
        },
        {
          path: "/Services",
          element: <Services></Services>,
        },
        {
          path: "/services/:id",
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) =>
            fetch(
              `https://video-editing-service-server.vercel.app/services/${params.id}`
            ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
