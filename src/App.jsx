import { IoIosArrowForward } from "react-icons/io"; 
import { IoIosArrowBack } from "react-icons/io"; 
import { Box, HStack, Icon, useColorModeValue, useStatStyles } from '@chakra-ui/react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import LayoutContent from './components/LayoutContent'
import Categories from './pages/Categories'
import Products from './pages/Products'
import CreateCategory from './pages/CreateCategory'
import CreateProduct from './pages/CreateProduct'
import MainContext from './store/context'
import { useReducer, useState } from 'react'
import { initialState, reducer } from './store/reducer'

function App() {
  const [state, dispatch]=useReducer(reducer, initialState)
  const [showDash, setShowDash]=useState(false)
  return (
    <MainContext.Provider value={{state, dispatch}}>
      <HStack width={'100%'} alignItems={'start'}  gap={0}>
      <Box width={'250px'} transition={'ease .3s'} position={{
        base: 'absolute', 
        md: 'relative'
      }} zIndex={'999'} left={{
        base : showDash ? '0px': '-250px',
        md: '0'
      }} backgroundColor={useColorModeValue("purple.500","gray.900")} height={'100vh'} borderRight={'1px'} borderColor={'whiteAlpha.400'}>
        <Sidebar setShowDash={setShowDash}/>
        <Box onClick={()=>setShowDash(!showDash)} border={'1px'} borderColor={'whiteAlpha.400'} borderLeft={'0'} position={'absolute'} display={{base: 'block', md: 'none'}} right={'-20px'} cursor={'pointer'} top={'50%'} color={'white'} pr={'3px'} py={'20px'} backgroundColor={useColorModeValue("purple.500","gray.900")}  roundedRight={'10px'}>
          {showDash ? <IoIosArrowBack /> : <IoIosArrowForward />} 
        </Box>
      </Box>
      
      <Box width={{
        base: '100%', 
        md: 'calc(100% - 250px)',
      }}>
        <Header/>
        <Routes>
          <Route path='/' element={<LayoutContent/>}>
              <Route path='/' element={<Categories/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/create-category' element={<CreateCategory/>}/>
              <Route path='/create-product' element={<CreateProduct/>}/>
          </Route>
        </Routes>
      </Box>
    </HStack>
    </MainContext.Provider>
  )
}

export default App
