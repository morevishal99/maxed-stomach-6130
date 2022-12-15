import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";

import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Select,
  Text,

} from "@chakra-ui/react";
import "./navbarBottomSelect.css";
import React from "react";
import { FiSearch } from "react-icons/fi";



const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()

  const Search = () => {
    navigate(`/products/${searchValue}`)
  }
  return (
    <Box bg={"white"}>
      
      <Image src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg"  />
      <Flex
        maxWidth={"90%"}
        m={"auto"}
        maxHeight="10rem"
        minH={"5rem"}
        pt="0.5rem"

        justify="space-between"
      >
        <Flex

          width={"84%"}
          flexDirection="row"
          alignItems="center"

          justifyContent="space-around"

        ><Link to={"/"}> <Image
        src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
        cursor="pointer"
        maxWidth="20rem"
        maxHeight="15rem"
        height={"5rem"}
        alt="Logo"

      ></Image></Link>
         

          <Flex bgColor={"white"} border={"1px solid lightgray"} alignItems="center">
            <Select placeholder="All Categories" maxWidth="10rem" fontSize={"14px"} border={"none"}>
              <option value="option1">--Make up</option>
              <option value="option2"> ----Face</option>
              <option value="option3">------Foundation</option>
              <option value="option3">------Blush</option>
              <option value="option3">------Highlighter</option>
              <option value="option3">------Concealer</option>
              <option value="option3">------Compact & Powder</option>
              <option value="option3">------Face Primer</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Bronzer</option>
              <option value="option3">------BB Cream</option>
              <option value="option3">------Loose Powder</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Setiig Spray</option>
              <option value="option3">------Makeup Kit</option>
              <option value="option3">------CC Cream</option>
            </Select>
            <Input
              placeholder="Search By Keyword"
              width={"30rem"}
              border="none"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IconButton
              bg="#dd0285"
              aria-label="Search database"
              color={"white"}
              fontSize="1.5rem"
              borderRadius={"0"}
              onClick={() => Search()}
              icon={<FiSearch />}
            />
          </Flex>
        </Flex>

        <Box  >
          <Flex marginTop="1rem"
            gap={"10px"}>
            <Profile></Profile>
            <Text paddingTop="10px" fontSize={"15px"}>My Account</Text>
          </Flex>

        </Box>

      </Flex>
    </Box>
  );
};
export default Navbar