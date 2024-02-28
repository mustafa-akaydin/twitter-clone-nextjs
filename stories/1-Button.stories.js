import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Button from '../components/button'
import NavigationButton from '../components/navigation/button'
import Navigation from '../components/navigation/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text/title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: "Buttons",
  decorators: [withKnobs],
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
export const Nav = () => {
  const flat = boolean("Flat", false);
  return <Navigation flat={flat} selectedKey="home" />;
};