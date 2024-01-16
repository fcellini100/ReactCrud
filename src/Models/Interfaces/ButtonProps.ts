import { ButtonColorValue } from "../Types";

export interface ButtonProps {
  label: string;
  color: ButtonColorValue;
  onClick: () => void;
}
