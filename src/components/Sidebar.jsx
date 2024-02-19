import { BiCategoryAlt } from "react-icons/bi"; 
import { Box, Button, Divider, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import btnData from "../config/constants";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({setShowDash}) => {
  const hoverBtn=useColorModeValue('whiteAlpha.200','blackAlpha.500')
  const activeBtn=useColorModeValue('purple.700','blackAlpha.600')
  const hoverActiveBtn=useColorModeValue('purple.800','blackAlpha.700')
  const {pathname}=useLocation()
  return (
    <Box width={'full'} p={'5px'} mt={'15px'}>
      <Text textAlign={'center'} fontWeight={'600'} fontSize={'20px'} color={'white'}>Dashboard</Text>
      <Divider my={'10px'}/>
      <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
         {btnData.map(item=>(
           <Link key={item.id} to={item.path}>
              <Button onClick={()=>setShowDash(false)} rounded={'sm'} isActive={item.path===pathname ? true : false} _active={{backgroundColor : activeBtn }} variant={'outline'} color={'white'} _hover={{backgroundColor : item.path===pathname ? hoverActiveBtn: hoverBtn}} width={'full'} justifyContent={'start'} gap={'10px'}>
              <Icon as={item.icon}/>
              <Text>{item.title}</Text>
           </Button>
           </Link>
         ))}
      </Box>
    </Box>
  )
}

export default Sidebar