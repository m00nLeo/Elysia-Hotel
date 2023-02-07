import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/common/NavMenu";
import GuessOderDetail from "./views/admin/orders/GuessOderDetail";
import Orders from "./views/admin/orders/Orders";
import Overview from "./views/admin/Overview";
import AddNewRoom from "./views/admin/rooms/AddNewRoom";
import RoomsList from "./views/admin/rooms/RoomsList";
import UpdateRoom from "./views/admin/rooms/UpdateRoom";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <NavMenu />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/roomslist" element={<RoomsList />} />
          <Route path="/roomslist/addnew" element={<AddNewRoom />} />
          <Route path="/roomslist/update/:roomid" element={<UpdateRoom />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:roomid" element={<GuessOderDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
