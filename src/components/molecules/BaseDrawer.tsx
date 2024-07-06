import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onHome: () => void;
  onUsers: () => void;
  onProfile: () => void;
}

export const BaseDrawer: FC<Props> = (props) => {
  const { isOpen, onClose, onHome, onUsers, onProfile } = props;
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button onClick={onHome} w="100%">
              ホーム
            </Button>
            <Button onClick={onUsers} w="100%">
              一覧
            </Button>
            <Button onClick={onProfile} w="100%">
              プロフィール
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
