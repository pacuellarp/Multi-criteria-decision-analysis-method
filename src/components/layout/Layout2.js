import Header2 from "../Headers/header2";
import DefaultFooter from "../Footers/DefaultFooter.js";
import Navbars from "../Navbars/IndexNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbars />
      <Header2 />
      <main>{children}</main>
      <DefaultFooter />
    </div>
  );
};

export default Layout;
