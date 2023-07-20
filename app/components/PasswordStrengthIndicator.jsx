import React, { Fragment, useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";

const PasswordStrengthIndicator = ({ password }) => {
  const getPasswordLength = () => {
    const passwordLength = password.length;

    if (passwordLength === 5) return "weak";
    else if (passwordLength === 10) return "medium";
    else if (passwordLength === 15) return "strong";
    else if (passwordLength === 20) return "very strong";
    else return;
  };
  const passwordStrength = getPasswordLength();

  if (!passwordStrength) return <Fragment></Fragment>;
  return (
    <Fragment>
      {passwordStrength === "weak" && (
        <div className={styles.rightSide}>
          <div className={styles.passwordStrength}>{passwordStrength}</div>
          <span className={styles.block}>
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
          </span>
        </div>
      )}
      {passwordStrength === "medium" && (
        <div className={styles.rightSide}>
          <div className={styles.passwordStrength}>{passwordStrength}</div>
          <span className={styles.block}>
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
          </span>
        </div>
      )}
      {passwordStrength === "strong" && (
        <div className={styles.rightSide}>
          <div className={styles.passwordStrength}>{passwordStrength}</div>
          <span className={styles.block}>
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
          </span>
        </div>
      )}
      {passwordStrength === "very strong" && (
        <div className={styles.rightSide}>
          <div className={styles.passwordStrength}>{passwordStrength}</div>
          <span className={styles.block}>
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block-filled.svg"
              height={30}
              width={10}
              alt="block"
            />
          </span>
        </div>
      )}
      {!passwordStrength && (
        <div className={styles.rightSide}>
          <div className={styles.passwordStrength}>{passwordStrength}</div>
          <span className={styles.block}>
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
            <Image
              src="/images/strength-block.svg"
              height={30}
              width={10}
              alt="block"
            />
          </span>
        </div>
      )}
    </Fragment>
  );
};

export default PasswordStrengthIndicator;
