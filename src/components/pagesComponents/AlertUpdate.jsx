import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../store/context'
import { getCategories, getProducts } from '../../hooks/getDataAxios'

const AlertUpdate = ({isOpen, onOpen, onClose,itemId,url, type}) => {
    const {state,dispatch}=useContext(MainContext)
    const [image, setImage]=useState('')
    const [title, setTitle]=useState('')
    const [price, setPrice]=useState('')
    const [description, setDescription]=useState('')
    const toast=useToast()

   async function UpdateCategory(id){
    const data= type=="category" ? {image, title}: {image, title, price, description}
    await axios.patch(`${url}/${id}` , data)
    .then((res)=>{
      toast({
        title: `Update ${type}`,
        status: 'success',
        isClosable: true,
        position: 'bottom-right'
    })
    })
    .catch((err)=>{
      toast({
        title: `Error update ${type}`,
        status: 'error',
        isClosable: true,
        position: 'bottom-right'
    })
    })
    onClose()
    if(type=='product'){
      getProducts(url, dispatch)
    } else {
    getCategories(url,dispatch)
    }
   }

   function checkType(){
    if(type==='category'){
      setImage(`${state.categories?.find(catItem=>catItem.id==itemId)?.image}`)
      setTitle(`${state.categories?.find(catItem=>catItem.id==itemId)?.title}`)
    } else{
      setImage(`${state.products?.find(item=>item.id==itemId)?.image}`)
      setTitle(`${state.products?.find(item=>item.id==itemId)?.title}`)
      setPrice(`${state.products?.find(item=>item.id==itemId)?.price}`)
      setDescription(`${state.products?.find(item=>item.id==itemId)?.description}`)
    }
   }

   useEffect(()=>{
    checkType()
   },[itemId])

  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update {type}</ModalHeader>
          <ModalCloseButton />
          {type==="category" ? 
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight={'bold'}>Image url</FormLabel>
              <Input size={'sm'} rounded={'sm'} fontWeight={'bold'} value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Image url' type='url' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight={'bold'}>Title</FormLabel>
              <Input value={title} size={'sm'} rounded={'sm'}  onChange={(e)=>setTitle(e.target.value)} fontWeight={'bold'} placeholder='Title' type='text'/>
            </FormControl>
          </ModalBody> :
          <ModalBody pb={6}>
          <FormControl>
            <FormLabel fontWeight={'bold'}>Image url</FormLabel>
            <Input fontWeight={'bold'} size={'sm'} rounded={'sm'}  value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Image url' type='url' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight={'bold'}>Title</FormLabel>
            <Input size={'sm'} rounded={'sm'}  value={title} onChange={(e)=>setTitle(e.target.value)} fontWeight={'bold'} placeholder='Title' type='text'/>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight={'bold'}>Price</FormLabel>
            <Input size={'sm'} rounded={'sm'}  fontWeight={'bold'} value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Price' type='number' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontWeight={'bold'}>Description</FormLabel>
            <Textarea resize={'none'} p={'10px'} value={description} onChange={(e)=>setDescription(e.target.value)} fontWeight={'bold'} placeholder='Description' type='text'></Textarea>
          </FormControl>
        </ModalBody>}

          <ModalFooter>
            <Button size={'sm'} rounded={'sm'} onClick={()=>UpdateCategory(itemId)} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button size={'sm'} rounded={'sm'} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default AlertUpdate