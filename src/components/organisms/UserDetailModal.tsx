import { useLoginUserContext } from "@/hooks/useLoginUserContext";
import { UserType } from "@/types/api/utils";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";
import { BaseButton } from "../atom/BaseButton";
import { useNotice } from "@/hooks/useNotice";

interface Props {
  isOpen: boolean;
  user: UserType | null;
  onClose: () => void;
}

export const UserDetailModal: FC<Props> = (props) => {
  const { user, isOpen, onClose } = props;
  const { loginUser } = useLoginUserContext();
  const { showNotice } = useNotice();
  const isAdmin = loginUser?.isAdmin;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onClickUpdate = () => {
    showNotice({
      title: "ユーザー情報を更新しました",
      status: "success",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p={4} pb={6} px={6}>
        <ModalCloseButton />
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalBody>
          <Stack spacing={6}>
            <FormControl>
              <FormLabel>ユーザー名</FormLabel>
              <Input
                value={user?.username}
                onChange={onChangeUsername}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={user?.name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Eメール</FormLabel>
              <Input
                value={user?.email}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input
                value={user?.phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
          </Stack>
          {isAdmin && (
            <ModalFooter p={0} mt={4}>
              <BaseButton hookEvent={onClickUpdate}>更新</BaseButton>
            </ModalFooter>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
