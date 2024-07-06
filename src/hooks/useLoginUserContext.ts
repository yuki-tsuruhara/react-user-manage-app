import { LoginUserContext } from "@/provider/LoginUserProvider";
import { useContext } from "react";

export const useLoginUserContext = () => useContext(LoginUserContext);
