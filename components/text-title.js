import React from "react";
import styles from "./text-title.module.css";
import cn from "classnames";

function TextTitle({ bold = true, children }) {
  return (
    <p className={cn([styles.title, bold && styles.bold])}>{children}</p>
  );
}

export default TextTitle;
