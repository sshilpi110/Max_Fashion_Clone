import { Box,Flex,SimpleGrid,Spacer,Text,Image,Button  } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/appcontext";

export default function Cart(){
let data=JSON.parse(localStorage.getItem('cart'))
const [cartdata,setCartData]=useState(data)
const navigate=useNavigate()

const removeitem=(id)=>{
    console.log(id)
    let newData=cartdata.filter((ele,i)=>{
return i!=id

    })

localStorage.setItem('cart',JSON.stringify(newData))
setCartData([...newData])


}
useEffect(()=>{
    window.document.title='Cart page'   
},[])

return <Box textAlign='left' w={'80%'} m='auto' >
<Box  fontSize={{base:'xl',sm:'xl',md:'2xl',lg:'4xl'}} borderBottom={'1px solid gray'}  textAlign='left' >Your Shopping Basket</Box>
<Text><b>{cartdata.length} Product</b></Text>
{ cartdata.length>0&& <SimpleGrid columns={{
    base:1,sm:1,md:1,lg:2,xl:2
}} gap={'30px'} >

<Box      >

{cartdata.map((ele,i)=>{
    return  <Flex  fontSize={{base:'sm'}} key={Date.now().toString()+i} borderBottom={'1px solid gray'}  mt='50px' alignItems={'center'} gap='20px'  >
<Box h={'200px'} > <Image h={'100%'} w='100%'  src={ele.image} /></Box>
<Box >
    <Text> <b>{ele.title}</b> </Text>
    <Text> <b>${ele.price}</b> </Text>
    <Button colorScheme='red' onClick={()=>removeitem(i)} >Remove</Button>
</Box>
       
        </Flex>
    
})}


</Box>

<Box   p='20px'>
    <Box border={'1px solid gray'} w='100%' p={'30px'} >
<Box display={'flex'}  >
    <Text fontSize={'xl'} >Total MRP</Text>
 <Spacer/>
    <Text fontSize={'xl'} ><b>$  {Math.ceil(cartdata.reduce((acc,ele)=>{

return acc+ele.price 

},0) )}</b>
</Text>

</Box>
<Box display={'flex'}  >
    <Text fontSize={'xl'} >Shipping charge</Text>
 <Spacer/>
    <Text fontSize={'xl'} ><b>Free</b>
</Text>

</Box>
<br />
<hr/>

<Box display={'flex'}  >
    <Text fontSize={'3xl'} ><b>Total</b></Text>
 <Spacer/>
    <Text fontSize={'3xl'} ><b>${ Math.ceil(cartdata.reduce((acc,ele)=>{

return acc+ele.price 

},0) )}</b>
</Text>

</Box>
<br />
<Button w={'100%'} bg='#303AB2' color='white' onClick={()=>navigate('/checkout')}  >Checkout now</Button>

</Box>
</Box>
</SimpleGrid>}


</Box>


}