import { AbsoluteCenter, Box, Center, Heading, HStack, Flex, Text } from "@chakra-ui/react";
import { EncryptedIcon, GeneralIcon } from "../assets/icons";

export function RightPanel(props){
    return(
        <Center bg='#f0f2f5' borderBottom='6px solid #43c960' position='relative' w='70%' {...props}>
            <Flex direction='column' textAlign='center' color='#41525d' align='center'>
                <GeneralIcon/>
                <Box pt='8'>
                    <Heading fontWeight='light'>WhatsApp Web</Heading>
                    <Text fontSize='sm' mt='4'>Send and receive messages without keeping your phone online. <br/>{' '} Use WhatsApp web on up to 4 linked devices and 1 phone at the same time.</Text>
                </Box>
                <AbsoluteCenter axis='horizontal' bottom='10' flex='1' mt='1'>
                    <HStack justifyItems='baseline' color='#8696a0'>
                        <EncryptedIcon/>
                        <Text fontSize='sm' fontWeight='medium'>End-to-end encrypted</Text>
                    </HStack>
                </AbsoluteCenter>
            </Flex>
        </Center>
    )
}