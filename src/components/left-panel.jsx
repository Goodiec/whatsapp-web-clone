import { Box, Flex } from "@chakra-ui/react";
import { ChatList } from "./chat-list";
import { Header } from "./header";
import { SearchPanel } from "./search-panel";

export function LeftPanel(props){
    return(
        <Flex direction='column' {...props} w='30%'>
            <Box>
                <Header/>
                <SearchPanel/>
            </Box>
            <ChatList flex='1' overflow='auto'/>
        </Flex>
    )
}