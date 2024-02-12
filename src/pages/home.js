import { useEffect } from "react";
import Layout from "../layout/Layout";
import Main from "../components/main/main";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default Home;
