import React from "react";
import Button from "./button";
import cn from "classnames";

import styles from "./navigation-button.module.css";

function NavigationButton({notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {notify && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}

export default NavigationButton;
