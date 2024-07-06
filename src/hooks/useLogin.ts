import { UserType } from "@/types/api/utils";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotice } from "./useNotice";
import { useLoginUserContext } from "./useLoginUserContext";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { showNotice } = useNotice();
  const { setLoginUser } = useLoginUserContext();
  const navigate = useNavigate();

  const login = async (loginId: string) => {
    setLoading(true);
    await axios
      .get<UserType>(`https://jsonplaceholder.typicode.com/users/${loginId}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 1;
          console.log(isAdmin);
          setLoginUser({ ...res.data, isAdmin });
          navigate("/home");
          showNotice({ title: "ログインしました", status: "success" });
        } else {
          showNotice({
            title: "ユーザーが見つかりませんでした",
            status: "error",
          });
        }
      })
      .catch((e) => {
        showNotice({
          title: "ログインできませんでした",
          status: "error",
        });
        throw new Error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    login,
  };
};
