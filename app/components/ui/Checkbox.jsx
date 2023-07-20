import React, { Fragment } from "react";
import styles from "../../page.module.css";
import { Content } from "next/font/google";

const Checkbox = ({ checked, onChange }) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        className={styles.check}
        checked={checked}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default Checkbox;
