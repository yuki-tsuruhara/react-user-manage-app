import { Box, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { FC, memo, useState } from "react";

interface Props {
  id: number;
  username: string;
  fullName: string;
  imageUrl?: string;
  onClick?: (id: number) => void;
}

export const UserCard: FC<Props> = memo((props) => {
  const {
    id,
    username,
    fullName,
    imageUrl = `https://picsum.photos/800?name=${username}`,
    onClick = () => {},
  } = props;
  const [imgLoading, setImgLoading] = useState(false);
  return (
    <>
      <Box
        textAlign="center"
        p={4}
        width="240px"
        height="240px"
        bg="white"
        borderRadius={8}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => onClick(id)}
      >
        <Skeleton
          isLoaded={imgLoading}
          width="140px"
          height="140px"
          borderRadius="full"
          mx="auto"
        >
          <Image
            width="140px"
            height="140px"
            src={imageUrl}
            alt="user"
            borderRadius="full"
            mx="auto"
            objectFit="cover"
            onLoad={() => setImgLoading(true)}
          />
        </Skeleton>
        <Stack>
          <Text fontSize={{ base: "lg" }} fontWeight="bold" mt={2}>
            {username}
          </Text>
          <Text fontSize={{ base: "sm" }} color="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    </>
  );
});
