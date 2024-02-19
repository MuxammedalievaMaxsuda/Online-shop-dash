import { BiSun } from "react-icons/bi"; 
import { BiSearch } from "react-icons/bi"; 
import { BiCategoryAlt } from "react-icons/bi"; 
import { BiMoon } from "react-icons/bi"; 
import { Box,Icon,IconButton,Input,InputGroup,InputRightElement,Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import btnData from "../config/constants";
import { useLocation } from "react-router-dom";

const Header = () => {
  const {colorMode, toggleColorMode}=useColorMode()
  const {pathname}=useLocation()
  return (
    <Box position={'sticky'}  backgroundColor={useColorModeValue("purple.300","gray.900")} height={'60px'} px={'10px'} borderBottom={'1px'} borderColor={'whiteAlpha.400'} width={'full'} top={0} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Box fontSize={'22px'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
        <Box p={'5px'} width={'35px'} height={'35px'} display={'flex'} justifyContent={'center'} alignItems={'center'} rounded={'sm'} backgroundColor={'purple.500'} color={'white'}>
          <Icon as={btnData.find(item=>item.path===pathname).icon}/>
        </Box>
        <Text fontWeight={'600'} fontSize={'18px'} color={'white'}>{btnData.find(item=>item.path===pathname).title}</Text>
      </Box>
      <Box width={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
        <InputGroup>
          <Input size={'sm'} rounded={'full'} color={'white'} _placeholder={{color: 'white'}} placeholder="Search..."/>
          <InputRightElement display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <IconButton rounded={'full'} width={'26px'} height={'29px'} mb={'7.5px'} mr={'4px'} icon={<BiSearch />}/>
          </InputRightElement>
        </InputGroup>
     
      <Box>
        <IconButton rounded={'full'} icon={colorMode==='light'? <BiMoon/> :<BiSun /> } onClick={()=>toggleColorMode()}/> 
      </Box>
      </Box>
    </Box>
  )
}

export default Header