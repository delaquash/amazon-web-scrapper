import Image from "next/image";
import Link from "next/link";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { fetchApi, baseURL } from "../utils/fetchApi";
import Property from '../components/Property';


const Banner = ({ purpose, title1, title2, desc1,desc2, linkName, buttonText, imageUrl }) => {
  return (
    <Flex flexWrap='wrap' justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} alt="image" width={500} height={300} />
      <Box p="5">
        <Text fontSize="sm" color="gray.500" fontWeight="medium">
            {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
            {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" color="gray.700" paddingBottom="3" paddingTop="3">{desc1} <br />{desc2}</Text>
      
      <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
      </Button>
      </Box>
  </Flex>
  )
}


export default function Home({propertiesForRent, propertiesForSale}) {
  console.log(propertiesForRent);
  return (
    <div>
      <h1>Hello World</h1>
        <Banner 
          purpose="RENT A HOME"
          title1="Rental homes for"
          title2="Everyone"
          desc1="Explore, Apartments, Villas, Homes and"
          desc2="More"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Flex flexWrap="wrap">
            {
              propertiesForRent.map((property) => <Property key={property.id} property={property}/>)
            }
        </Flex>
         <Banner
          purpose='BUY A HOME'
          title1=' Find, Buy & Own Your'
          title2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />
        <Flex flexWrap="wrap">
            {
              propertiesForSale.map((property) => <Property key={property.id} property={property}/>)
            }
        </Flex>
    </div>
  )
}


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