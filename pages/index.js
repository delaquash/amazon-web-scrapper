import Image from "next/image";
import Link from "next/link";
import { Box, Button, Flex, Text } from "@chakra-ui/react";


const Banner = ({ purpose }) => {
  <Flex flexWrap='wrap' justifyContent="center" alignItems="center" m="10">
      <Image src='imageUrl' alt="image" width="500" height="300" /> \
      <Box p="5">
        <Text fontSize="sm" color="gray.500" fontWeight="medium">
            {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
            {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" color="gray.700" paddingBottom="3" paddingTop="3">desc1</Text>
      </Box>
      <Button fontSize="xl" color="white" bg="blue.300">
          <Link href={linkName}>{buttonText}</Link>
      </Button>
  </Flex>
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to nextjs</h1>
        <Banner />
    </div>
  )
}
