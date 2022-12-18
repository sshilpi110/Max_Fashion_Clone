import { Box, Button, Flex, Input, Spacer, Stack,Text,Image,SimpleGrid, Alert, AlertIcon, SlideFade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const forHead={ base: '10px',sm:"10px", md: '15px', lg: '20px' }
const forNormel={ base: '8px',sm:"8px", md: '10px', lg: '15px' }
const footerList={base: '8px',sm:"8px", md: '10px', lg: '15px'}
const socialMediaLogo={base: '20px',sm:"20px", md: '25px', lg: '30px'}



export default function Footer(){

const [state,setState]=useState(false)
const [alertMassege,setAlertMassege]=useState("")
const handleAlert=(x)=>{
    
 x==1?setAlertMassege("Calling......"):x==2?setAlertMassege("Opening Help Center Page..."):setAlertMassege("Opening Feedback form...")
    
    setState(!state)

    
}


return <Box padding={'30px'} borderTop={'1px solid gray'}    >
    
<SimpleGrid columns={[1,1,2,2,2]} w={'80%'} m='auto' borderBottom={'1px solid gray'} alignItems="center"    >
    <Stack p={'30px'} >
<Text fontWeight={'bold'} fontSize={forHead} >Subscribe to our awesome emails.</Text>
<Text fontSize={forNormel} >Get our latest offers and news straight in your inbox.</Text>
<br /><br />
<Box display={'flex'} justifyContent="center" >

<Input fontSize={{ base: '8px',sm:"8px", md: '10px', lg: '15px' }} placeholder="Please enter an email address" h={{base:'15px',sm:"20px",md:'30px',lg:'41px'}} w={{ base: '150px',sm:"100px", md: '150px', lg: '250px' }}   />

<Button h={{base:'15px',sm:"20px",md:'30px',lg:'41px'}}  w={{sm:"20px",md:"50px",lg:'100px' }} fontSize={{ base: '8px',sm:"8px", md: '10px', lg: '15px' }} >Subscribe</Button>
</Box>
    </Stack>



{/* /////////////////////// */}

    <Stack >

    <Text fontWeight={'bold'} fontSize={forHead} >Download our apps</Text>
<Text fontSize={forNormel} >Shop our products and offers on-the-go.</Text>

<Box p={'20px'} display={'flex'} >

<Box  w={'40%'} >

<Image w={'100%'} src="/appleStore.png" />
</Box>
<Spacer/>
<Box w={'40%'}  >

<Image w={'100%'} src="/playStore.png" />
</Box>
</Box>


    </Stack>
</SimpleGrid>
<br/>

<SimpleGrid w={'80%'} fontSize={footerList}  m="auto" borderBottom={'1px solid gray'} columns={4}  spacing={10}   >
  <Box  ><Text fontWeight={'bold'} >Women </Text>
  <Text>Tops</Text>
  <Text>Dresses & Jumpsuits</Text>
  <Text>Sportswear</Text>
  <Text>Bottoms</Text>
  <Text>Winterwear</Text>
  <Text>Ethnicwear</Text>
  <Text>Lingerie</Text>
  <Text>Sleepwear</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text>
 </Box>
  <Box ><Text fontWeight={'bold'} >Men</Text>
 
  <Text>Tops</Text>
  <Text>Bottoms</Text>
  <Text>Sportswear</Text>
  <Text>Winterwear</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text>
  
  </Box>
  <Box  ><Text fontWeight={'bold'} >Boys </Text>
  <Text>Tops</Text>
  <Text>Bottoms</Text>
  <Text>Indian Wear</Text>
  <Text>Winterwear</Text>
  <Text>Essentials</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text></Box>
  
  <Box  ><Text fontWeight={'bold'} >Girls</Text>
  <Text>Tops</Text>
  <Text>Bottoms</Text>
  <Text>Indian Wear</Text>
  <Text>Winterwear</Text>
  <Text>Essentials</Text>
  <Text>Accessories</Text>
  <Text>Shoes</Text>
  </Box>
 
  <Box ><Text fontWeight={'bold'} >Explore</Text>
  <Text>Offers</Text>
  <Text>Magazine</Text>
  </Box>
  <Box ><Text fontWeight={'bold'} >About</Text>
  <Text>About us</Text>
  <Text>Write to us</Text>
  <Text>Careers</Text>
  <Text>Take a Tour</Text>
  <Text>Blog</Text>
  <Text>Store Locator</Text>
  <Text>Landmark Cares</Text>
  
  </Box>
  <Box  ><Text fontWeight={'bold'} >Help</Text>
  <Text>Contact us</Text>
  <Text>Shipping</Text>
  <Text>Returns Process</Text>
  <Text>Returns Policy</Text>
  <Text>Help Centre</Text>
  
  </Box>
</SimpleGrid>

<br />


{/* /////////////////////////// */}
<SlideFade in={state} offsetY='20px'>
      
<Alert status={"success"}>
<AlertIcon />
{alertMassege}
</Alert>

</SlideFade>


<SimpleGrid 

borderBottom={"1px solid gray"}
p='20px'
 columns={[1,1,2,2,4]} justifyContent='center' w="80%" m={'auto'}  gap={'30px'}  >
  
<Box onClick={()=>handleAlert(1)} gap={'.5rem'} display={'flex'}  alignItems="center" justifyContent={'center'}     >
    <Box fontSize={socialMediaLogo}  >

<i style={
    {
        color:"black",border:"1px solid black",padding:'15px',borderRadius:'50%'
    }} className="fa-solid fa-phone"></i> 
    </Box>
     <Box>
        <Text>Talk to us</Text>
        <Text>1800-123-1444</Text>
    </Box>
    
</Box>
    

<a  href='https://helpin.maxfashion.com/' >
<Box onClick={()=>handleAlert(2)} gap={'.5rem'} display={'flex'}   alignItems="center" justifyContent={'center'}  

// border={'1px solid red'}  
 >
    
<Box fontSize={socialMediaLogo}
   style={
       {
           border:"1px solid black",padding:'15px',borderRadius:'50%'
        }}
        className="material-symbols-outlined">
help_center
</Box>  
       

<Box>
        <Text>Helpcentre</Text>
        <Text>help.maxfashion.com</Text>
    </Box>
    
</Box>
         </a>

<a href="https://www.maxfashion.in/in/en/write-to-us" >

<Box onClick={()=>handleAlert(3)} gap={'.5rem'} display={'flex'}  alignItems="center" justifyContent={'center'}     >
  

<Box fontSize={socialMediaLogo} style={
    {
        color:"black",border:"1px solid black",fontSize:'30px',padding:'15px',borderRadius:'50%'
    }} className="material-symbols-outlined">
mail
  
        </Box>
<Box>
        <Text>Write to us</Text>
        <Text>help.in@maxfashion.com</Text>
    </Box>
    
</Box>
        </a>

{/* <Spacer/> */}
<Box  display={'flex'} fontSize={socialMediaLogo} alignItems={'center'} justifyContent="center"   >
<a href="https://www.facebook.com/maxfashions/">

<Box><i className="fa-brands fa-facebook-f"></i></Box>
</a>

<Spacer/>
<a href="https://www.twitter.com/maxfashionindia">

<Box>
 
 
 <i className="fa-brands fa-twitter"></i></Box> 
</a>

<Spacer/>
<a href="https://www.instagram.com/maxfashionindia">
<Box><i className="fa-brands fa-instagram"></i></Box>
</a>
    
    
</Box>


</SimpleGrid>



   
</Box>


}