import { UserType } from "@/types/api/utils";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type LoginUser = UserType & { isAdmin: boolean };

interface LoginUserContextType {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
}

interface Props {
  children: ReactNode;
}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: Props) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
