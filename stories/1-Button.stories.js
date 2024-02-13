import React from "react";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import TextTitle from "../components/text-title";
import ThemeButton from "../components/theme-button";
import Stack from "../components/stack";
import { Home } from "../components/icons";

export default {
  title: "Buttons",
};

export const Normal = {
  render: () => <Button>Save</Button>,
};
export const Theme = {
  render: () => (
    <Stack column>
      <ThemeButton>Save</ThemeButton>
      <ThemeButton full>Save Full</ThemeButton>
      <ThemeButton full big>
        Save big button
      </ThemeButton>
    </Stack>
  ),
};

export const NavButton = {
  render: () => (
    <NavigationButton>
      <Home />
      <TextTitle>Home</TextTitle>
    </NavigationButton>
  ),
};
export const Nav = {
  render: () => <Navigation selectedKey="home" />,
};
