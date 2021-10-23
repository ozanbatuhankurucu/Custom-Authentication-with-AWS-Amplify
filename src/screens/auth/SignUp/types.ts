import { NavigationProp, ParamListBase } from '@react-navigation/native';

export type userInformationType = {
  username: string;
  email: string;
  password: string;
};

export interface SignUpPropsType {
  navigation: NavigationProp<ParamListBase>;
}
