import { Button } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  hookEvent: () => void;
  bg?: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
}

export const BaseButton: FC<Props> = memo((props) => {
  const {
    hookEvent,
    children,
    loading = false,
    disabled = false,
    bg = "skyblue",
    color = "white",
  } = props;
  return (
    <Button
      bg={bg}
      color={color}
      onClick={hookEvent}
      _hover={{ opacity: "0.7" }}
      isLoading={loading}
      isDisabled={disabled}
    >
      {children}
    </Button>
  );
});
