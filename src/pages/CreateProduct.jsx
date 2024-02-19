import { Box, Button, FormControl, FormLabel,  Input, Select, Textarea, useToast} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../store/context'
import { getCategories } from '../hooks/getDataAxios'
import axios from 'axios'

const CreateProduct = () => {
  const {state,dispatch}=useContext(MainContext)
  const [image,setImage]=useState('')
  const [title,setTitle]=useState('')
  const [price,setPrice]=useState('')
  const [description,setDescription]=useState('')
  const [categoryId,setCatId]=useState('')
  const urlCat="https://online-shop-database-65lu.onrender.com/categories"
  const urlPro="https://online-shop-database-65lu.onrender.com/products"
  const toast=useToast()

  useEffect(()=>{
    getCategories(urlCat, dispatch)
  },[])

  function setProduct(e){
    e.preventDefault()
    const data={title,price,image,description,categoryId}
    axios.post(urlPro,data)
    .then((res)=>{
        toast({
          title: 'Added product',
          status: 'success',
          duration: 2000,
          rounded: 'sm',
          isClosable: true,
          position: 'bottom-right'
        })
    })
    .catch(err=>{
        toast({
          title: 'Error adding product',
          status: 'error',
          duration: 2000,
          rounded: 'sm',
          isClosable: true,
          position: 'bottom-right'
        })
    })
    setTitle('')
    setImage('')
    setPrice('')
    setDescription('')
    setCatId('')
  }



  return (
    <Box>
       <form onSubmit={(e)=>setProduct(e)}>
        <FormControl mt={'10px'}>
          <FormLabel mb={0} fontWeight={'600'} fontSize={'16px'}>Image url</FormLabel>
          <Input value={image} onChange={(e)=>setImage(e.target.value)} fontWeight={'bold'} type='url' required rounded={'sm'} size={'sm'} placeholder='Enter the image url'/>
        </FormControl>
        <FormControl mt={'10px'}>
          <FormLabel mb={0} fontWeight={'600'} fontSize={'16px'}>Name</FormLabel>
          <Input value={title} onChange={(e)=>setTitle(e.target.value)} fontWeight={'bold'} type='text' required rounded={'sm'} size={'sm'} placeholder='Enter the name'/>
        </FormControl>
        <FormControl mt={'10px'}>
          <FormLabel mb={0} fontWeight={'600'} fontSize={'16px'}>Price</FormLabel>
          <Input value={price} onChange={(e)=>setPrice(e.target.value)} fontWeight={'bold'} type='number' required rounded={'sm'} size={'sm'} placeholder='Enter the price'/>
        </FormControl>
        <FormControl mt={'10px'}>
          <FormLabel mb={0} fontWeight={'600'} fontSize={'16px'}>Description</FormLabel>
          <Textarea value={description} onChange={(e)=>setDescription(e.target.value)} fontWeight={'bold'}  resize={'none'}  padding={'5px'}></Textarea>
        </FormControl>
        <FormControl  mt={'10px'}>
          <FormLabel mb={0} fontWeight={'600'} fontSize={'16px'}>Category name</FormLabel>
          <Select  value={categoryId} required onChange={(e)=>setCatId(e.target.value)} fontWeight={'bold'} placeholder='Select category' rounded={'sm'}>
            {state.categories?.map(item=>(
              <option  key={item.id} value={item.id}>{item.title}</option>
            ))}
          </Select>
        </FormControl>
        <Button type='submit' rounded={'sm'} color={'white'} colorScheme={'blue'} float={'right'} size={'sm'} mt={'10px'}>Submit</Button>
       </form>
    </Box>
  )
}

export default CreateProduct