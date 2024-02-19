import { Box, Grid, GridItem, Skeleton, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { getCategories } from '../hooks/getDataAxios'
import MainContext from '../store/context'
import CategoryItem from '../components/pagesComponents/CategoryItem'
import AlertDelete from '../components/pagesComponents/AlertDelete'
import AlertUpdate from '../components/pagesComponents/AlertUpdate'

const Categories = () => {

  const {state, dispatch}=useContext(MainContext)
  const url="https://online-shop-database-65lu.onrender.com/categories"
  const {isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose}=useDisclosure()
  const {isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose}=useDisclosure()
  const [itemId, setItemId]=useState()
  const fakeArray=[1,2,3,4,5]
  useEffect(()=>{
    getCategories(url, dispatch)
  },[])

  return (
    <>
      {state.isCatLoading && state.categories.length==0 ? 
        <Grid w={'full'} gridTemplateColumns={{base: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr'}} gap={'10px'}>
        {fakeArray?.map(item=>(
          <GridItem  key={item}>
           <Stack rounded={'sm'} border={'1px'} borderColor={'whiteAlpha.300'} p={'7px'} width={'full'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
             <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'5px'}>
              <Skeleton height={'45px'} width={'45px'} rounded={'sm'}/>
              <Skeleton height={'20px'} width={'120px'}/>
             </Box>
             <Box display={'flex'} gap={'5px'} justifyContent={'center'} alignItems={'center'}>
              <Skeleton height={'30px'} width={'30px'} rounded={'sm'}/>
              <Skeleton height={'30px'} width={'30px'} rounded={'sm'}/>
             </Box>
            </Stack>
          </GridItem>
        ))}
      </Grid>
       : 
      <Grid w={'full'} gridTemplateColumns={{base: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr'}} gap={'10px'}>
        <>
        <AlertUpdate isOpen={isUpdateOpen} onOpen={onUpdateOpen} onClose={onUpdateClose} url={url} itemId={itemId} type={'category'}/>
        <AlertDelete isOpen={isDeleteOpen} onOpen={onDeleteOpen} onClose={onDeleteClose} url={url} itemId={itemId} type={'category'}/>
          {state.categories?.map(item=>(
            <GridItem  key={item.id}>
              <CategoryItem item={item} setItemId={setItemId} onDeleteOpen={onDeleteOpen} onUpdateOpen={onUpdateOpen}/>
            </GridItem>
          ))}
        </>
      </Grid>
      }
    </>
  )
}

export default Categories