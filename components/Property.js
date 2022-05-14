import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go'
import DefaultImage from '../assets/images/house.jpg';

const Property =({ property : { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId }}) => (
    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop='0' justifyContent='flex-start' cursor='pointer'>
            <Box>
                <Image  src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="Rental" />
            </Box>
            <Box w="full">
                <Flex alignItems="center">
                    <Box paddingRight="3" color="green.400">
                        { isVerified && <GoVerified /> }
                    </Box>
                    <Text fontWeight="bold" fontSize="lg">
                        AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                    </Text>
                </Flex>
                <Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url}/>
                    </Box>
                </Flex>
                {/* /* Aligning the items in the center and adding space between them. */ }
                <Flex alignItems="center" justifyContent="space-between" p="1" w="250px" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath/> | {millify(area)} sqFt <BsGridFill />
                </Flex>
                 {/* Checking if the title is greater than 30 characters, if it is, it will display the
                first 30 characters and add three dots to the end of the title.  */}
                <Text fontSize="lg">
                    { title.length > 30 ? `${title.substring(0, 30)}....`: title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;