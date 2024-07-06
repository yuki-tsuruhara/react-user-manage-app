import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { BaseDrawer } from "../molecules/BaseDrawer";
import { useNavigate } from "react-router-dom";

export const Header = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onHome = useCallback(() => {
    navigate("/home");
  }, []);

  const onUsers = useCallback(() => {
    navigate("/users");
  }, []);

  const onProfile = useCallback(() => {
    navigate("/profile");
  }, []);
  return (
    <header className="h-[50px] w-full bg-blue-400">
      <Flex
        color="white"
        width="100%"
        height="100%"
        p={5}
        align="center"
        justify="space-between"
      >
        <Heading
          fontSize={{ base: "md", md: "lg" }}
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          onClick={onHome}
        >
          ユーザー管理
        </Heading>
        <Flex as="nav" display={{ base: "none", md: "flex" }}>
          <Box mr={3}>
            <Link onClick={onUsers} fontSize={{ base: "sm" }}>
              一覧
            </Link>
          </Box>
          <Box>
            <Link onClick={onProfile} fontSize={{ base: "sm" }}>
              プロフィール
            </Link>
          </Box>
        </Flex>
        <HamburgerIcon
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        ></HamburgerIcon>
        <BaseDrawer
          isOpen={isOpen}
          onClose={onClose}
          onHome={onHome}
          onUsers={onUsers}
          onProfile={onProfile}
        />
      </Flex>
    </header>
  );
});
