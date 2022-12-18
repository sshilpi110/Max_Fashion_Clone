import { Stack ,Box,Text,Flex, Spacer,Image, Input, Button, MenuList, MenuButton,Menu,MenuItem,SimpleGrid, } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons" 
import styles from "./navbar.module.css"
import Modaal from "../router/modal"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Appcontext } from "../context/appcontext"



export default function Navbar(){
const {state,dispatch}=useContext(Appcontext)
const navigate=useNavigate()
// console.log('navbar',state)
const handleLogout=()=>{
  dispatch({type:'logout'})
  navigate('/')
}
return <Stack w={'100%'}  >

<Flex  className={styles.topNav}    >
<Box fontSize={'sm'}  w={{
  base:'60%',sm:'60%',md:'50%',lg:'50%'
}}  >
    <Flex>

    <Text  ><i className="fa-solid fa-truck"></i>  Free Shipping</Text>
   <Spacer/>
    <Text>
 
 
 <i className="fa-solid fa-store"></i>  Return To Store </Text>
    <Spacer/>
    <Text> 
 
 
 <i className="fa-solid fa-gift"></i>  Click & Collect</Text>

    </Flex>
</Box>
<Spacer/>
<Box w={"30%"}  >
    <Flex>

    <Text>Download Our Apps</Text> 
   <Spacer/>
    <Text>|</Text> 
   <Spacer/>
    <Text>Store Locator</Text>
    <Spacer/>
    <Text>|</Text> 
    <Spacer/>
    <Text>Help</Text>


    </Flex>
    </Box>
</Flex>



{/* //////////////////////////////////////////////////////////////// */}

<SimpleGrid className={styles.navCont} columns={{base:1,sm:1,md:1,lg:3}}   >
<Box className={styles.check}  >
<Box>
    <Link to='/' ><Image src="https://www.landmarkgroup.com/qa/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"/></Link>
</Box>
<Menu  >
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Women
  </MenuButton>
  <MenuList w={{
    base:'400px',
    sm:"600px",
    md:"800px",
    lg:'1000px'
  }}
  
  
  >
   <Link to='/products/women' > <MenuItem>Tops</MenuItem></Link>
   <Link to='/products/women' > <MenuItem>Indian wear</MenuItem></Link>
   <Link to='/products/women' ><MenuItem>Sports wear</MenuItem></Link>
   <Link to='/products/women' > <MenuItem>Dresses</MenuItem></Link>
   <Link to='/products/women' > <MenuItem>Bottom Wear</MenuItem></Link>
   <Link to='/products/women' ><MenuItem>Sleepwear</MenuItem></Link>
  </MenuList>
</Menu>
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Men
  </MenuButton>
  <MenuList w={{
    base:'200px',
    sm:"400px",
    md:"600px",
    lg:'800px'
  }} >
    <Link to='/products/men' ><MenuItem>Tops</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Indian wear</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Sports wear</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Dresses</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Bottom Wear</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Sleepwear</MenuItem></Link>
  </MenuList>
</Menu>
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Girls
  </MenuButton>
  <MenuList w={{
    base:'200px',
    sm:"300px",
    md:"500px",
    lg:'700px'
  }} >
   <Link to='/products/women' > <MenuItem>Tops</MenuItem></Link>
   <Link to='/products/women' > <MenuItem>Indian wear</MenuItem></Link>
   <Link to='/products/women' ><MenuItem>Sports wear</MenuItem></Link>
   <Link to='/products/women' ><MenuItem>Dresses</MenuItem></Link>
   <Link to='/products/women' ><MenuItem>Bottom Wear</MenuItem></Link>
   <Link to='/products/women' ><MenuItem>Sleepwear</MenuItem></Link>
  </MenuList>
</Menu>
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    Boys
  </MenuButton>
  <MenuList w={{
    base:'100px',
    sm:"150px",
    md:"400px",
    lg:'600px'
  }}  >
    <Link to='/products/men' ><MenuItem>Tops</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Indian wear</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Sports wear</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Dresses</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Bottom Wear</MenuItem></Link>
    <Link to='/products/men' ><MenuItem>Sleepwear</MenuItem></Link>
  </MenuList>
</Menu>

</Box>

<Box border={'1px solid skyblue'}  p="0px 0px 0px 5px"  ><i className="fa-solid fa-magnifying-glass"></i><Input placeholder="What are you looking for?" border={'none'} outline={"none"}   /></Box>
<Box>
{state.isAuth?<Menu>
  <MenuButton  className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>} >hello! {state.email}</MenuButton>
  <MenuList  >
    <MenuItem>{state.email}</MenuItem>
    <MenuItem onClick={handleLogout} >Logout</MenuItem>
    <MenuItem>Account</MenuItem>
    <MenuItem>wishlist</MenuItem>
   
  </MenuList>
</Menu>:<Modaal/>}
<Menu>
  <MenuButton className={styles.cont} bg="none" colorScheme='white'  color={"black"} as={Button} rightIcon={<ChevronDownIcon/>}>
    More
  </MenuButton>

  <MenuList>
    <MenuItem>Online Gift Card</MenuItem>
    <MenuItem>Online Gift Card</MenuItem>
    <MenuItem>Blog</MenuItem>
    <MenuItem>City Buzz</MenuItem>
    <MenuItem>SBI Offers</MenuItem>
    <MenuItem>Partner Enquiry</MenuItem>
  </MenuList>
</Menu>
{/* <Box> <Login/> </Box> */}
<Box  > <Link to='/cart' > <i style={{color:'red'}} className="fa-solid fa-heart"></i></Link></Box>
<Box><Link to='/cart'> <i style={{color:'teal'}} className="fa-solid fa-bag-shopping"></i></Link> </Box>

</Box>


</SimpleGrid>


</Stack>



}