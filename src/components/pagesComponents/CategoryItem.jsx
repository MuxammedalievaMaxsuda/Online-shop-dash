import { MdDeleteOutline } from "react-icons/md"; 
import { BiEditAlt } from "react-icons/bi"; 
import { Box, Card, CardBody, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const CategoryItem = ({item,setItemId,onDeleteOpen, onUpdateOpen}) => {
  function openAlertDelete(id){
    setItemId(id)
    onDeleteOpen()
  }
  function openAlertUpdate(id){
    setItemId(id)
    onUpdateOpen()
  }
  return (
    <Card border={'1px'} borderColor={'whiteAlpha.300'} rounded={'sm'} backgroundColor={useColorModeValue('purple.300','gray.900')}>
        <CardBody p={'7px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
                <Image rounded={'sm'} src={item.image} width={'45px'} height={'45px'} objectFit={'cover'}/>
                <Text color={'white'} fontWeight={'semibold'}>{item.title.length>8? `${item.title.slice(0,8)}...`: item.title}</Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
                <IconButton onClick={()=>openAlertDelete(item.id)} colorScheme="red" fontSize={'15px'} size={'sm'} icon={<MdDeleteOutline />}/>
                <IconButton onClick={()=>openAlertUpdate(item.id)} colorScheme="blue" fontSize={'15px'} size={'sm'}  icon={<BiEditAlt />}/>
            </Box>
        </CardBody>
    </Card>
  )
}

export default CategoryItem