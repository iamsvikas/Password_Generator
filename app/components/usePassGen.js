import { useState } from "react";

const usePassGen = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "";
    let generatedPassword = "";

    const selectedOptions = checkboxData.filter(
      (checkbox) => checkbox.isIncluded
    );

    if (selectedOptions.length === 0) {
      setErrorMessage("Select atleast one option!");
      setPassword("");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }
    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  };
  return { password, errorMessage, generatePassword };
};

export default usePassGen;
