import React from "react";

import useWindowSize from "../hooks/useWindowSize";
import CONST from "../constants";
import Layout from "../components/layout";
import Sidebar from "../components/col-sidebar";
import Main from "../components/col-main";
import Extra from "../components/col-extra";

function Home() {
  const size = useWindowSize();

  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>
      <Main>main</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  );
}

export default Home;
