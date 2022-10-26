import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Programs from "../Pages/Programs/Programs";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Courses from "../Pages/Courses/Courses";

export const routers = createBrowserRouter([
  {
    path: '/', element: <Main></Main>,
    children:[
      {
        path: '/', element: <Home></Home>,
      },
      {
        path: '/programs', element: <Programs></Programs>,
      },
      {
        path: '/courses/:id', element: <Courses></Courses>,
        loader: ({params}) => fetch(`http://localhost:5000/subjects/${params.id}`)
      },
     
      {
        path: '/checkout/:id', element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
      },
      {
        path: '/blog', element: <Blog></Blog>
      },
      {
        path: '/login', element: <Login></Login>
      },
      {
        path: '/register', element: <Register></Register>
      }
    ]
  },
  {
    path: '*', element: <div>this page was not found: 404</div>
  }
])



