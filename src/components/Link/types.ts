export interface LinkPropsTpe {
  text: string;
  onPress: () => void;
  customStyle?: CustomStyleType;
}

type CustomStyleType = {
  marginLeft?: number;
};
