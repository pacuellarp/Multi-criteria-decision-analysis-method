import Header from "../components/Headers/IndexHeader.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import Navbars from "../components/Navbars/IndexNavbar";

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
