import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import Navbars from "../components/Navbars/IndexNavbar.js";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Navbars />
      <LandingPageHeader title={title} />
      <main>{children}</main>
      <DefaultFooter />
    </div>
  );
};

export default Layout;
