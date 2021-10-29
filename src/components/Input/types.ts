export interface InputProps {
  placeHolder: string;
  onChange: (name: string, value: string) => void;
  secureTextEntry?: boolean;
  name: string;
  handleOnFocus: () => void;
  handleOnBlur: () => void;
}
