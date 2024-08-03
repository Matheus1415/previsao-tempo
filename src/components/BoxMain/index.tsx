import { Box, Flex, Text } from "@chakra-ui/react"
import { WiCloudyWindy } from "react-icons/wi";
import { TbClockHour3, TbWind } from "react-icons/tb";
import { FaCloud, FaCloudRain } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsMoisture } from "react-icons/bs";

export const BoxMain = () => {
    return(
        <Flex
            bgImage="/paisagem.jpg"
            bgAttachment="fixed"
            bgPosition="center center"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            maxW="1200px"
            height={400}
            borderRadius={20}
            align="center"
            justifyContent="center"
            p={10}
            gap={10}
        >
            <Flex 
                w="100%"
                maxW="40%"
                h="300px"
                align="center"
                justifyContent="space-around"
                borderRadius={20}
                color="white"
                direction="column"
            >  
                <Flex fontSize={20} align="center">
                    <IoLocation />
                    Ceara - Horizonte
                </Flex>
                <Text fontSize={80}>18°C</Text>
                <Flex direction="row" gap={4}>
                    <Flex direction="row" bg="#6d05a575" color="#ffffffec" align="center"  borderRadius={4} p={2} maxH={50} gap={2}>
                        <TbWind  size={25}/>
                        <Flex direction="column">
                            <Text fontSize={10}>Vento</Text>
                            <Text fontSize={16}>17 km/h</Text>
                        </Flex>
                    </Flex>
                    <Flex direction="row" bg="#6d05a575" color="#ffffffec" align="center"  borderRadius={4} p={2} maxH={50} gap={2}>
                        <BsMoisture  size={25}/>
                        <Flex direction="column">
                            <Text fontSize={10}>Umidade</Text>
                            <Text fontSize={17}>22%</Text>
                        </Flex>
                    </Flex>
                    <Flex direction="row"  bg="#6d05a575" color="#ffffffec" align="center"  borderRadius={4} p={2} maxH={50} gap={2}>
                        <FaCloudRain  size={25}/>
                        <Flex direction="column">
                            <Text fontSize={10}>Chuva</Text>
                            <Text fontSize={17}>10%</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex 
                w="100%"
                maxW="75%"
                wrap="wrap"
                gap={5}
            >
                <Flex direction="row" w="100%" gap={5}>
                    <Box
                        w="50%"
                        bg="#ffffff8d"
                        minH={100}
                        borderRadius={10}
                        p={4}
                    >
                        <Flex fontSize={25} align="center" justifyContent="center">
                            <WiCloudyWindy size={35}/>
                            <Text ml={2}>Qualidade do Ar</Text>
                        </Flex>
                        <Text fontSize={22} fontWeight={900} mt={2}>
                            Boa <br />
                            21
                        </Text>
                    </Box>
                    <Box
                        w="50%"
                        bg="#ffffff8d"
                        minH={100}
                        borderRadius={10}
                        p={4}
                    >
                        <Flex fontSize={25} align="center" justifyContent="center">
                            <TbClockHour3 size={25}/>
                            <Text ml={2}>Horário</Text>
                        </Flex>
                        <Text fontSize={50} fontWeight={900} mt={2}>
                            09:44
                        </Text>
                    </Box>
                </Flex>

                <Box
                    w="100%"
                    bg="#af92ff80"
                    minH={100}
                    borderRadius={10}
                    p={4}
                >
                    <Flex align="center" justifyContent="space-between">
                        {['Amanhã', 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta'].map((day, index) => (
                            <Flex 
                                key={index}
                                h="100%" 
                                color="white"
                                direction="column" 
                                align="center" 
                                justifyContent="center" 
                                p={2} 
                                borderRadius={10}
                                gap={5}
                            >
                                <Text>{day}</Text>
                                <FaCloud  size={35}/>
                                <Text>21° | 16°</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}
