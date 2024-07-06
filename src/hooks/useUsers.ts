import { UserType } from "@/types/api/utils";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useNotice } from "./useNotice";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const { showNotice } = useNotice();

  const getUsers = async () => {
    setLoading(true);
    await axios
      .get<UserType[]>("https://jsonplaceholder.typicode.com/users")
      .then((res: AxiosResponse<UserType[]>) => {
        setUsers(res.data);
      })
      .catch(() => {
        showNotice({
          title: "ユーザーを取得できませんでした",
          status: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    users,
    getUsers,
  };
};
