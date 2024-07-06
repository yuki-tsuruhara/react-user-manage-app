import { FC, ReactNode } from "react";
import { Header } from "../organisms/Header";

interface Props {
  children: ReactNode;
}

export const HeaderLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
