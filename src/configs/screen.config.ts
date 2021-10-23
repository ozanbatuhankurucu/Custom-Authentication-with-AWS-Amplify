// declaring a set of named constants
export enum APP_SCREEN {
  LOG_IN = 'Login',
  SIGN_UP = 'SignUp',
  HOME = 'Home',
  DASHBOARD = 'Dashboard'
}

export type RootStackParamList = {
  [APP_SCREEN.LOG_IN]: undefined;
  [APP_SCREEN.SIGN_UP]: undefined;
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.DASHBOARD]: undefined;
};
