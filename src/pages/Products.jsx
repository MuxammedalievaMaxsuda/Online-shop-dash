import {  Box,  Card, CardBody, Grid, GridItem, Skeleton, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { getCategories, getProducts } from '../hooks/getDataAxios'
import MainContext from '../store/context'
import ProductItem from '../components/pagesComponents/ProductItem'
import AlertDelete from '../components/pagesComponents/AlertDelete'
import AlertUpdate from '../components/pagesComponents/AlertUpdate'

const Products = () => {
  
  const {state, dispatch}=useContext(MainContext)
  const url="https://online-shop-database-65lu.onrender.com/products"
  const urlCat="https://online-shop-database-65lu.onrender.com/categories"
  const {isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose}=useDisclosure()
  const {isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose}=useDisclosure()
  const fakeArray=[1,2,3,4]
  const [itemId, setItemId]=useState()
  useEffect(()=>{
    getCategories(urlCat, dispatch)
  },[])

  useEffect(()=>{
    getProducts(url,dispatch)
  },[])

  return (
    <>
    {state.isProLoading && state.products.length==0 ? <Box>
      <Grid alignContent={'baseline'}  gridTemplateColumns={{base: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr',xl: '1fr 1fr 1fr 1fr'}} gap={'10px'}>
        {fakeArray.map(item=>(
          <GridItem key={item}>
              <Card  border={'1px'} borderColor={'whiteAlpha.300'} rounded={'sm'} display={'flex'} p={'10px'}>
                <CardBody>
                  <Stack p={'0'} display={'flex'} flexDir={'column'} gap={'10px'} justifyContent={'center'} >
                    <Skeleton mx={'auto'} alignContent={'center'} rounded={'sm'} w={'200px'} height={'250px'}/>
                    <Skeleton h={'20px'} width={'200px'}/>
                    <Skeleton h={'20px'} width={'100px'}/>
                    <Skeleton h={'150px'} width={'full'}/>
                    <Box display={'flex'} justifyContent={'center'} gap={'5px'}>
                      <Skeleton h={'30px'} width={'full'} rounded={'sm'}/>
                      <Skeleton h={'30px'} width={'full'} rounded={'sm'}/>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
          </GridItem>
        ))}
      </Grid>
    </Box> : 
    <>      
      <AlertUpdate isOpen={isUpdateOpen} onOpen={onUpdateOpen} onClose={onUpdateClose} url={url} itemId={itemId} type={'product'}/>
      <AlertDelete isOpen={isDeleteOpen}  onClose={onDeleteClose} itemId={itemId} url={url} type={"product"}/>
      <Grid alignContent={'baseline'}  gridTemplateColumns={{base: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr',xl: '1fr 1fr 1fr 1fr'}} gap={'10px'}>
        {state.products?.map(item=>(
          <GridItem key={item.id}>
              <ProductItem setItemId={setItemId} item={item} onDeleteOpen={onDeleteOpen} onUpdateOpen={onUpdateOpen}/>
          </GridItem>
        ))}
      </Grid>
    </>
    }
  </>
  )
}

export default Products