import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Login from "../views/Login";
import Overview from "../views/admin/Overview";
import RoomsList from "../views/admin/rooms/RoomsList";
import AddNewRoom from "../views/admin/rooms/AddNewRoom";
import UpdateRoom from "../views/admin/rooms/UpdateRoom";
import Orders from "../views/admin/orders/Orders";
import GuessOderDetail from "../views/admin/orders/GuessOderDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/roomslist",
        element: <RoomsList />,
      },
      {
        path: "/roomslist/addnew",
        element: <AddNewRoom />,
      },
      {
        path: "/roomslist/update/:roomid",
        element: <UpdateRoom />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/:roomid",
        element: <GuessOderDetail />,
      },
    ],
  },
]);

export default router;
