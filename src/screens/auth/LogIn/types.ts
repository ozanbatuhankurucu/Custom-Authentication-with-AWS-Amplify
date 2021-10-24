import { NavigationProp, ParamListBase } from '@react-navigation/native';
export interface LoginPropsType {
  navigation: NavigationProp<ParamListBase>;
}

export type userInformationType = {
  username: string;
  password: string;
};
