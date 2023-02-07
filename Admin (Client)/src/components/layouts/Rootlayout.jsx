import { Outlet } from "react-router-dom";
import NavMenu from "../common/NavMenu";

const RootLayout = () => {
  return (
    <div className="container">
      <div className="flex">
        <NavMenu />

        {/*children */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
