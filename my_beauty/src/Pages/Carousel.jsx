
// import "./slider.css";
import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
import { Box, Heading, Image, Flex } from "@chakra-ui/react";





let slideshow = [
    "https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg",
    "https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg",
    "https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg",
];


export const Slideshow = () => {
    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    };

    const renderSlides = () =>
        slideshow.map((num) => (
            <div className="slideshow" key={num}>
                <img style={{ width: "100%", height: "350px" }} src={num}></img>
            </div>
        ));
    return (
        <div style={{ display: "flex", marginTop: "3rem" }}>
            <div style={{ width: "400px", height: "300px", padding: "2rem", lineHeight: "2rem" }}>
                <Box textAlign={"left"}>
                    <Heading fontSize={"18px"}>All Catogories</Heading>

                    <Flex> <Image  boxSize='20px' src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" /> MakeUp</Flex>
                    <Flex> <Image  boxSize='20px' src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" /> Skin</Flex>
                    <Flex> <Image  boxSize='20px' src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" /> Hair</Flex>
                    <Flex> <Image boxSize='20px'  src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" /> Personal Care</Flex>
                    <Flex> <Image  boxSize='20px' src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" /> Mom and Baby Care</Flex>
                    <Flex> <Image  boxSize='20px' src="https://www.beautybebo.com/pub/media/fragrance.png" /> Fregrence</Flex>
                    <Flex> <Image  boxSize='20px' src="https://www.beautybebo.com/pub/media/ayurveda.png" /> Ayurveda</Flex>

                </Box>

            </div>
            <div style={{ width: "70%", height: "350px", padding: "1rem" }} className="slideSliderApp">
                <Box style={{ width: "100%", height: "100%" }} {...settings}>{renderSlides()}</Box>
            </div>
            .
        </div>
    );
};
