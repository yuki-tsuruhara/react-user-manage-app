import { useToast } from "@chakra-ui/react";

interface Props {
  title: string;
  status: "success" | "error" | "warning" | "info" | "loading";
}

export const useNotice = () => {
  const toast = useToast();
  const showNotice = (props: Props) => {
    const { title, status } = props;
    toast({
      title,
      status,
      position: "top-right",
      isClosable: true,
      duration: 3000,
    });
  };
  return {
    showNotice,
  };
};
