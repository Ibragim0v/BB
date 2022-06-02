import { useContext } from "react";
import { InputContext } from "../context/Input";

export const useInput = () => {
  const { inputValue, setInputValue } = useContext(InputContext);

  return { inputValue, setInputValue };
};
