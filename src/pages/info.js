import React, { useEffect } from "react";
import Layout3 from "../layout/Layout3";
import InfoComponent from "../components/info/info";

function Info() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const href = window.location.href.substring(
        window.location.href.lastIndexOf("#") + 1
      );
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }, []);

  return (
    <>
      <Layout3 title={"Decisión multicriterio"}>
        <InfoComponent />
      </Layout3>
    </>
  );
}

export default Info;
