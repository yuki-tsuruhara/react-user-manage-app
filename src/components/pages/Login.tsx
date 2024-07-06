import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState } from "react";
import { BaseButton } from "../atom/BaseButton";
import { useLogin } from "@/hooks/useLogin";

export const Login = memo(() => {
  const { loading, login } = useLogin();
  const [loginId, setLoginId] = useState("");

  const onChangeLoginId = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };

  const onClickLogin = () => login(loginId);
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Box p={6} bg="white" borderRadius={6}>
        <Heading textAlign="center" fontSize={{ base: "1rem" }}>
          ユーザー管理
        </Heading>
        <Divider my={4}></Divider>
        <Stack>
          <Input
            value={loginId}
            onChange={onChangeLoginId}
            placeholder="ログインID"
          ></Input>
          <BaseButton
            disabled={loginId === ""}
            loading={loading}
            hookEvent={onClickLogin}
          >
            ログイン
          </BaseButton>
        </Stack>
      </Box>
    </Flex>
  );
});
