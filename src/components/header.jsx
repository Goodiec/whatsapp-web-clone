import {CommunityIcon, NewChatIcon, StatusIcon, MenuIcon} from '../assets/icons';
import { Avatar, Flex, IconButton, Tooltip, HStack } from '@chakra-ui/react';

const iconData = [
    {icon: <CommunityIcon/>, label: 'Community chat'},
    {icon: <StatusIcon/>, label: 'Status icon'},
    {icon: <NewChatIcon/>, label: 'New chat'},
    {icon: <MenuIcon/>, label: 'Menu'}
];

function CustomTooltip({icon, label, ...rest}){
    return(
        <Tooltip
        ShouldWrapChildren
        label={label}
        bg='#eae6df'
        color='black'
        fontSize='xs'
        {...rest}
        >
            <IconButton variant='ghost'>{icon}</IconButton>
        </Tooltip>
    )
}

export function Header(props) {
    return (
      <Flex
        justify='space-between'
        bg='#f0f2f5'
        py='2'
        px='4'
        borderRight='1px solid #f2f2f2'
        color='#54656f'
        {...props}
      >
        <Avatar
          boxSize='40px'
          name='Goody'
          color="#00FF00"
        />
        <HStack spacing='3'>
          {iconData.map((item, index) => (
            <CustomTooltip key={index} label={item.label} icon={item.icon} />
          ))}
        </HStack>
      </Flex>
    );
}

