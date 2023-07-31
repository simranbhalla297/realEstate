import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScroolbar from "../../components/ImageScroolbar";
export default function PropertyDetails({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    coverPhoto,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) {
  console.log(amenities);
  return (
    <>
      <Box maxWidth="1000px" margin="auto" p="4">
        <Text fontWeight="bold" fontSize="lg" align="center" mb="8">
          {title}
        </Text>
        {photos && <ImageScroolbar data={photos} />}

        <Box w="full" p="6">
          <Flex paddingTop="2" alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {price} {rentFrequency && `/${rentFrequency}`}
            </Text>
            <Spacer />
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text mt="5">{description}</Text>

          <Box mt="5">
            <ul>
              {amenities.map((list) => {
                return (
                  <>
                    <Box mt="3">
                      <Text fontWeight="bold" fontSize="md">
                        {list.text}
                      </Text>
                      {list.amenities.map((item) => {
                        return (
                          <>
                            <ul>
                              <li>{item.text}</li>
                            </ul>
                          </>
                        );
                      })}
                    </Box>
                  </>
                );
              })}
            </ul>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  console.log(id);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
