import Header from "../Headers/IndexHeader.js";
import DefaultFooter from "../Footers/DefaultFooter.js";
import Navbars from "../Navbars/IndexNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbars />
      <Header />
      <main>{children}</main>
      <DefaultFooter />
    </div>
  );
};

export default Layout;
