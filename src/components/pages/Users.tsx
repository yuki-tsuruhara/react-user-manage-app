import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/UserCard";
import { useUsers } from "@/hooks/useUsers";
import { UserDetailModal } from "../organisms/UserDetailModal";
import { useSelectUser } from "@/hooks/useSelectUser";

export const Users = memo(() => {
  const { getUsers, users, loading } = useUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { selectUser, selectedUser } = useSelectUser();

  const onClickUserDetail = useCallback(
    (id: number) => {
      selectUser({ id, users, onOpen });
    },
    [users]
  );

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <Wrap spacing={8} p={{ base: 4, md: 8 }}>
          {users.map((user) => {
            return (
              <WrapItem key={user.id}>
                <UserCard
                  id={user.id}
                  onClick={onClickUserDetail}
                  username={user.username}
                  fullName={user.name}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
