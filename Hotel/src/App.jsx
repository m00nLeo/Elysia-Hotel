import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AboutHotel from "./views/about";
import Contact from "./views/contact";
import Home from "./views/homepage";
import NotFound from "./views/NotFound";
import Reservation from "./views/reservation";
import BookingCompleted from "./views/reservation/bookingcompleted/BookingCompleted";
import Completed from "./views/reservation/completed/Completed";
import CustomerInfo from "./views/reservation/customerInfo/CustomerInfo";
import RoomDetail from "./views/roomdetail";
import Rooms from "./views/rooms";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutHotel />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roomdetail/:productId" element={<RoomDetail />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/information" element={<CustomerInfo />} />
          <Route path="/reservation/complete" element={<Completed />} />
          <Route path="/reservation/finish" element={<BookingCompleted />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
