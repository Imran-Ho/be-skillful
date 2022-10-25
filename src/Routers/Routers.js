import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Programs from "../Pages/Programs/Programs";


export const routers = createBrowserRouter([
  {
    path: '/', element: <Main></Main>,
    children:[
      {
        path: '/login', element: <Login></Login>
      },
      {
        path: '/programs', element: <Programs></Programs>
      },
      {
        path: '/blog', element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*', element: <div>this page was not found: 404</div>
  }
])



