import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RootStackParamList, APP_SCREEN } from '@/configs';
export interface LoginPropsType {
  navigation: NavigationProp<ParamListBase>;
  route: RouteParamList;
}

export type userInformationType = {
  username: string;
  password: string;
};
// TODOOzan route un nasil uygulandigina open source projeden bakilacak.
type RouteParamList = {
  key: string;
  name: string;
  params: RootStackParamList[APP_SCREEN.LOG_IN];
};
