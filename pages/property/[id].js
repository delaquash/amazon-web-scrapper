import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go'
import DefaultImage from '../assets/images/house.jpg';
import millify from "millify";

import { baseURL, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = () => ({propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amentie, photos }}
    (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos} />}
        </Box>
    )
);

export default PropertyDetails;


export async function getServerSideProps({params: {id}}){
    const data = await fetchApi(`${baseURL}/properties/detail?externalID=${id}`)
    console.log(data);

    return {
        props: {
            PropertyDetails : data
        }
    }
}
