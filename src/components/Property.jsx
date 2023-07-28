import Link from "next/link";
// import Image from "next/image";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const defaultImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBZN29YQz6wOAysPMP1S6LJUiCgVmBF9FaiqGuuuk9g&s";

export default function Property({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) {
  return (
    <>
      <Link href={`/property/${externalID}`} passHref>
        <Flex
          flexWrap="wrap"
          w="420px"
          p="5"
          paddingTop="0px"
          justifyContent="flex-start"
          cursor="pointer"
        >
          <Box style={{ height: "260px" }}>
            <img
              src={coverPhoto ? coverPhoto.url : defaultImage}
              width="400"
              height="260"
              alt=""
              style={{ height: "100%" }}
            />
          </Box>
          <Box w="full">
            <Flex
              paddingTop="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center">
                <Box paddingRight="3" color="green.400">
                  {isVerified && <GoVerified />}
                </Box>
                <Text fontWeight="bold" fontSize="lg">
                  AED {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
              <Box>
                <img
                  src={agency?.logo?.url}
                  width="50"
                  height="50"
                  alt=""
                  style={{ maxWidth: "100%" }}
                />
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              p="1"
              justifyContent="space-between"
              w="250px"
              color="blue.400"
            >
              {rooms}
              <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
            <Text fontSize="lg">
              {title.length > 30 ? title.substring(0, 30) + "..." : title}
            </Text>
          </Box>
        </Flex>
      </Link>
    </>
  );
}
