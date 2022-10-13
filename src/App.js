import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>,
  },
  {
  path: "/Login",
  element: <Login/>,
  },
  {
  path: "/SignIn",
  element: <SignIn/>,
  },
  {
  path: "/CreatePost",
  element: <CreatePost/>,
  },
])

//laura
//function Router

function App() {
  return <RouterProvider router={router} />;
}

export default App;
