// App Stack Navigator Types

export interface AppStackNavigatorProps {
  setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Auth Stack Navigator Types
export interface AuthStackNavigatorProps {
  setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Main Navigator Types
export type User = {
  attributes: UserAttributes;
  username: string;
};

type UserAttributes = {
  email: string;
  email_verified: boolean;
  sub: string;
};
