import React from "react";

import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";

function ImageScroolbar({ data }) {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {data.slice(0, 4).map((item) => {
          return (
            <>
              <Box mb="2" style={{ height: "260px" }}>
                <img
                  src={item.url}
                  alt=""
                  height="260"
                  width="400"
                  style={{ height: "100%" }}
                />
              </Box>
            </>
          );
        })}
      </Flex>{" "}
    </>
  );
}

export default ImageScroolbar;
