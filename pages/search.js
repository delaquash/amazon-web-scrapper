import { useRouter } from "next/router";
import { useState } from "react";
import Image from 'next/image';
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsFilter } from 'react-icons/bs';
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";

import noresult from '../assets/images/noresult.svg';

const Search =({ properties })=> {
    const [searchFilter, setSearchFilter] = useState(false)
    const router = useRouter();
    return (
        <Box>
            <Flex cursor="pointer" bg="gray.100" borderBottom="1px"
                borderColor="gray.200" p='2' fontWeight="black" fontSize="lg" 
                justifyContent= "center" alignItems="center" 
                onClick={() => setSearchFilter((prevFilter) => !prevFilter)}            
            >
                <Text>Search by Filter</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilter && <SearchFilters/>}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {properties.map((property) => <Property property ={property} key={property.id} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop='5' marginBottom='5'>
                    <Image src={noresult} alt="image" />
                    <Text marginTop="3" fontSize="3xl"> No result found.</Text>
                </Flex>
            )}
        </Box>
    )
}

export default Search;

export async function getStaticProps() {
    const propertyForSale = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
    const propertyForRent = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
    return {
      props: {
        propertiesForSale:propertyForSale?.hits,
        propertiesForRent:propertyForRent?.hits
      }
    }
  }