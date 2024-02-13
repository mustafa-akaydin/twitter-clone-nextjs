import React from "react";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import TitleBold from "../components/title-bold";
import {Home} from "../components/icons";



export default {
  title: "Buttons",
};

export const Normal = {
  render: () => <Button>Save</Button>,
};

export const NavButton = {
  render: () => (
    <NavigationButton>
      <Home />
      <TitleBold>Home</TitleBold>
    </NavigationButton>
  ),
};
export const Nav = {
  render: () => <Navigation selectedKey="home" />,
};
