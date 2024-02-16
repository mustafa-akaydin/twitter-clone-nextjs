import React from "react";
import styles from "./navigation.module.css";
import NavigationButton from "./navigation-button";
import TextTitle from "./text-title";

import {
  Twitter,
  Home,
  Explore,
  Messages,
  Lists,
  Profile,
  Bookmark,
  Notification,
  More,
} from "./icons";

function Navigation({ flat=false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>
      <NavigationButton selected={selectedKey === "home"}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === "explore"}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavigationButton>
      <NavigationButton notify={1} selected={selectedKey === "notification"}>
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === "messages"}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === "bookmark"}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === "lists"}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === "profile"}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavigationButton>
      <NavigationButton selected={selectedKey === "More"}>
        <More />
        <TextTitle>More</TextTitle>
      </NavigationButton>
    </nav>
  );
}

export default Navigation;
