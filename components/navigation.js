import React from "react";
import { useRouter } from "next/navigation";

import { MENU } from "../constants";
import styles from "./navigation.module.css";

import NavigationButton from "./navigation-button";
import TextTitle from "./text-title";

import { Twitter } from "./icons";

export function Navigation({ flat = false}) {
  const router = useRouter();
  
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter style={{ fontSize: 30 }} />
      </NavigationButton>
      {MENU.map((menu) => {
        const showTitle = !flat || menu.title.length === 0;
        const selected = router.asPath === menu.path;
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
