import { User } from '@/navigation/types';

// declaring a set of named constants
export enum APP_SCREEN {
  LOG_IN = 'Login',
  SIGN_UP = 'SignUp',
  CONFIRM_SIGN_UP = 'ConfirmSignUp',
  HOME = 'Home',
  DASHBOARD = 'Dashboard'
}
// TODOOzan refactor yapilacak common.
export type RootStackParamList = {
  [APP_SCREEN.LOG_IN]: {
    setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };
  [APP_SCREEN.SIGN_UP]: {
    setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };
  [APP_SCREEN.CONFIRM_SIGN_UP]: {
    setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };
  [APP_SCREEN.HOME]: {
    setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  };
  [APP_SCREEN.DASHBOARD]: undefined;
};
