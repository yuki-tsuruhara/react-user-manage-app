import { UserType } from "@/types/api/utils";
import { useState } from "react";

interface Props {
  id: number;
  users: UserType[];
  onOpen: () => void;
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  const selectUser = (props: Props) => {
    const { id, users, onOpen } = props;
    const user = users.find((user) => user.id === id);
    setSelectedUser(user ?? null);
    onOpen();
  };

  return {
    selectUser,
    selectedUser,
  };
};
