import { Box,Flex,Spacer,Text,Image,Stack, SimpleGrid, Button, Checkbox, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Checkout(){


    let init=JSON.parse(localStorage.getItem('cart'))||[]
    const[data,setData]=useState(init)
    const toast = useToast()
    // console.log(data)
    const navigate=useNavigate()
    const setPayment=()=>{

        toast({
            title: `Payment Successfully!!!!! `,
            description:'order deliver with in 5-10 working days',
            status: 'success',
            isClosable: true,
            position:'top'
          })
localStorage.setItem('cart',JSON.stringify([]))
          navigate('/')

    }
    useEffect(()=>{
        window.document.title='Payment page'   
    },[])
return <Box  >

<SimpleGrid border={'1px solid blue'} columns={{base:1,sm:1,md:2,lg:2}}  w={{
    base:"100%",sm:'100%',md:"80%",lg:'80%' 
}}  m='auto' >

<Box    border='1px solid gray' >

<Text fontSize={'3xl'} >Select a payment method</Text>
<hr />



<Stack p={"30px"} spacing={5} direction='column'>
  <Checkbox colorScheme='green' >
  <Text><i className="fa-solid fa-credit-card"></i>Credit/Debit Card</Text>
  </Checkbox>
  <Checkbox colorScheme='green' ><Text><i className="fa-solid fa-money-bill-1-wave"></i>Cash On Delivery</Text></Checkbox>
  <Checkbox colorScheme='green' ><Text><i className="fa-solid fa-credit-card"></i>Credit/Debit Card</Text></Checkbox>
  <Checkbox colorScheme='green' ><Text><i className="fa-solid fa-money-bill-transfer"></i>NetBanking</Text></Checkbox>
  <Checkbox colorScheme='green' ><Text><i className="fa-solid fa-wallet"></i>Wallets</Text></Checkbox>
  <Checkbox colorScheme='green' ><Text><i className="fa-solid fa-panel-fire"></i>UPI</Text></Checkbox>

<Button onClick={setPayment}  w={'50%'} m='auto' color={'white'} bg={'#303ab2'} >Place Your Order</Button>

</Stack>
</Box>


{/* //////////////////////////////////////////////////////// */}

<Box p={'30px'}    border='1px solid gray' >
<Text fontSize={'xl'} ><b>Your order summary</b></Text>
<hr />
<br />
{data.map((ele,i)=>{
return <Flex alignItems={'center'} gap='30px'  h={'150px'} borderBottom={'1px solid gray'} key={Date.now().toString()+i} >
    <Box  h={'100px'}  w={'30%'}  ><Image h={'100%'} w='100%'  src={ele.image} /></Box>
    <Box h={'100px'}     ><Text>{ele.title}</Text><Text>price: {ele.price}</Text></Box>
   
</Flex>

    })}

    <Flex fontSize={'4xl'} >
    <Text><b>Totel</b> :  </Text>
<Spacer/>
    <Text>$ {Math.ceil(data.reduce((acc,ele)=>{
return acc+ele.price
},0)
)}</Text>
    </Flex>


</Box>


    




</SimpleGrid>

</Box>


}