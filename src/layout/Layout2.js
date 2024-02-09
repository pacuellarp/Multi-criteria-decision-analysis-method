import Header2 from "../components/Headers/header2.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import Navbars from "../components/Navbars/IndexNavbar.js";

const Layout = ({ title, subtitle, children }) => {
  return (
    <div>
      <Navbars />
      <Header2 title={title} subtitle={subtitle} />
      <main>{children}</main>
      <DefaultFooter />
    </div>
  );
};

export default Layout;
