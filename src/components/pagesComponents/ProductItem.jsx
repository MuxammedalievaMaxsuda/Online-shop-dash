import {  Box, Button, Card, CardBody, Image, Text, useColorModeValue} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import MainContext from '../../store/context'


const ProductItem = ({item,onDeleteOpen,onUpdateOpen,setItemId}) => {
  const {state}=useContext(MainContext)
  const [desActive,setDesActive]=useState(false)
  
  function setDeleteItem(id){
    onDeleteOpen()
    setItemId(id)
  }
  function setUpdateItem(id){
    onUpdateOpen()
    setItemId(id)
  }
  
  return (
    <Card border={'1px'} borderColor={'whiteAlpha.300'}  backgroundColor={useColorModeValue('purple.400','gray.900')} rounded={'sm'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'10px'}>
        <CardBody p={'0'} display={'flex'} flexDir={'column'} gap={'10px'} justifyContent={'center'} >
            <Box position={'relative'}>
               <Image mx={'auto'} alignContent={'center'} rounded={'sm'} w={'200px'} height={'250px'} objectFit={'cover'} src={item.image}/>
               <Text position={'absolute'} top={'10px'} left={'10px'} p={'3px'} rounded={'sm'} backgroundColor={'blackAlpha.700'} color={'white'} fontSize={'12px'}>
                {state.categories?.find(catItem=>catItem.id==item.categoryId)?.title}
               </Text>
            </Box>            
            <Text color={'white'} fontWeight={'600'}>{item.title}</Text>
            <Text color={'white'}>price: {item.price}$</Text>
            <Box cursor={'pointer'}   onClick={()=>setDesActive(!desActive)} height={'100px'} overflowY={'auto'} border={'1px'} borderColor={'whiteAlpha.400'} rounded={'sm'} my={'5px'} p={'7px'}>
                <Text color={'white'} fontSize={'15px'}>{desActive ? item.description : item.description.slice(0,80)+'...'}</Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} gap={'5px'}>
                <Button  colorScheme={'red'} onClick={()=>setDeleteItem(item.id)} color={'white'} width={'full'} size={'sm'} rounded={'sm'}>Delete</Button>
                <Button colorScheme={'blue'} onClick={()=>setUpdateItem(item.id)}  color={'white'} width={'full'} size={'sm'} rounded={'sm'}>Update</Button>
            </Box>
        </CardBody>
    </Card>
  )
}

export default ProductItem