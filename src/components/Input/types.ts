export interface InputProps {
  placeHolder: string;
  onChange: (name: string, value: string) => void;
  secureTextEntry?: boolean;
  name: string;
}
