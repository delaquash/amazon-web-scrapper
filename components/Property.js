import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go'

const Property =({ property : { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId }}) => (
    <Link href={`/property/${externalId}`} passHref>
        {title}
    </Link>
);

export default Property;