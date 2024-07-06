import { Home } from "@/components/pages/Home";
import { Profile } from "@/components/pages/Profile";
import { Users } from "@/components/pages/Users";
import { ReactNode } from "react";

interface UserRoutesType {
  path: string;
  children: ReactNode;
}

export const UserRoutes: UserRoutesType[] = [
  {
    path: "/home",
    children: <Home />,
  },
  {
    path: "/users",
    children: <Users />,
  },
  {
    path: "/profile",
    children: <Profile />,
  },
];
