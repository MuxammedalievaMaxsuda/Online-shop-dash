import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const CreateCategory = () => {
  const [title, setTitle]=useState('')
  const [image, setImage]=useState('')
  const toast=useToast()
  const url="https://online-shop-database-65lu.onrender.com/categories"
  function setCategories(e){
    e.preventDefault()
    const data={title,image}
    axios.post(url,data)
    .then((res)=>{
        toast({
          title: 'Added category',
          status: 'success',
          duration: 2000,
          rounded: 'sm',
          isClosable: true,
          position: 'bottom-right'
        })
    })
    .catch(err=>{
        toast({
          title: 'Error adding category',
          status: 'error',
          duration: 2000,
          rounded: 'sm',
          isClosable: true,
          position: 'bottom-right'
        })
    })
    setTitle('')
    setImage('')
  }

  return (
    <Box>
       <form onSubmit={(e)=>setCategories(e)}>
        <FormControl mt={'10px'}>
          <FormLabel mb={0} fontWeight={'600'} fontSize={'16px'}>Image url</FormLabel>
          <Input value={image} fontWeight={'bold'} onChange={(e)=>setImage(e.target.value)} size={'sm'} rounded={'sm'} required type='url' placeholder='Enter the image url'/>
        </FormControl>
        <FormControl mt={'10px'}>
          <FormLabel mb={0}  fontWeight={'600'} fontSize={'16px'}>Name</FormLabel>
          <Input value={title}  fontWeight={'bold'} onChange={(e)=>setTitle(e.target.value)} size={'sm'} rounded={'sm'} required type='text' placeholder='Enter the name'/>
        </FormControl>
        <Button float={'right'} mt={'10px'} type='submit' colorScheme='blue' rounded={'sm'} size={'sm'} color={'white'}>Submit</Button>
       </form>
    </Box>
  )
}

export default CreateCategory