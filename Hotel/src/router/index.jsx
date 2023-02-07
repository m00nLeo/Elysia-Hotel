import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Home from "../views/homepage";
import Rooms from "../views/rooms";
import Contact from "../views/contact";
import Reservation from "../views/reservation";
import AboutHotel from "../views/about";
import RoomDetail from "../views/roomdetail";
import NotFound from "../views/NotFound";
import CustomerInfo from "../views/reservation/customerInfo/CustomerInfo";
import Completed from "../views/reservation/completed/Completed";
import BookingCompleted from "../views/reservation/bookingcompleted/BookingCompleted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutHotel />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/roomdetail/:productId",
        element: <RoomDetail />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/reservation/information",
        element: <CustomerInfo />,
      },
      {
        path: "/reservation/complete",
        element: <Completed />,
      },
      {
        path: "/reservation/finish",
        element: <BookingCompleted />,
      },
    ],
  },
]);

export default router;
