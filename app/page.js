"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import usePassGen from "./components/usePassGen";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import Checkbox from "./components/ui/checkbox";

export default function Home() {
  const [length, setLength] = useState(5);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", isIncluded: false },
    { title: "Include Lowercase Letters", isIncluded: false },
    { title: "Include Numbers", isIncluded: false },
    { title: "Include Symbols", isIncluded: false },
  ]);
  const [copied, setCopied] = useState(false);
  const handleCheckboxInput = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].isIncluded = !updatedCheckboxData[i].isIncluded;
    setCheckboxData(updatedCheckboxData);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const { password, errorMessage, generatePassword } = usePassGen();
  return (
    <main className={styles.main}>
      <header className={styles.header}>Passoword Generator</header>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            readOnly
            placeholder="Click Generate to get your password"
            value={password}
          />
          <div className={styles.iconContainer}>
            <Image
              src={`/images/${copied ? "tick" : "copy-btn"}.svg`}
              alt="Copy Icon"
              width={24}
              height={24}
              onClick={handleCopy}
            />
          </div>
        </div>

        <div className={styles.inputBlock}>
          <div className={styles.charLength}>
            <span>
              <label>Character Length</label>
              <p>{length}</p>
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={20}
            value={length}
            step={5}
            onChange={(e) => setLength(e.target.value)}
            className={styles.rangeInput}
          />
          {/* <RangeInput /> */}
          <div className={styles.checkboxes}>
            {checkboxData.map((inputEl, index) => {
              return (
                <div key={index} className={styles.checkbox}>
                  <Checkbox
                    checked={inputEl.isIncluded}
                    onChange={() => handleCheckboxInput(index)}
                  />
                  {/* <input
                    type="checkbox"
                    checked={inputEl.isIncluded}
                    onChange={() => handleCheckboxInput(index)}
                  /> */}
                  <label>{inputEl.title}</label>
                </div>
              );
            })}
          </div>
          <div className={styles.strengthBlock}>
            <span className={styles.strengthLevel}>Strength</span>
            {password ? (
              <PasswordStrengthIndicator password={password} />
            ) : (
              <div className={styles.none}>none</div>
            )}
          </div>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
          <button
            className={styles.generateBtn}
            onClick={() => generatePassword(checkboxData, length)}
          >
            <p className={styles.btn}>Generate</p>
            <Image src="/images/arrow.svg" height={24} width={24} alt="arrow" />
          </button>
        </div>
      </div>
    </main>
  );
}
