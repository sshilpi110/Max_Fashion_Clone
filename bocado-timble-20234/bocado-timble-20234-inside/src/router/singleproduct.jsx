import { Box, SimpleGrid,Image,Text,Button, Flex, Spacer, Input,Skeleton, Spinner, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/appcontext";

const getData=(id)=>{

  return  axios.get(`https://fakestoreapi.com/products/${id}`)

}


export default function SingleProduct(){
    const [data,setData]=useState({})
    const {state,dispatch}=useContext(Appcontext)
    const[cartbtnEffect,setCartbtnEffect]=useState(false)
   const[error,setError]=useState(false)
    const[count,setCount]=useState(0)
    const param=useParams()
    const toast = useToast()
    useEffect(()=>{
        dispatch({type:'loading'})
        getData(param.id).then((res)=>{
            setData(res.data)
            // console.log(res)
setError(false)
            dispatch({type:'loded'})
        }).catch((err)=>{
            setError(true)
        })
    
            window.document.title='Single product'   
   
    },[])
    const addCartHnadler=()=>{
//         setCartbtnEffect(!cartbtnEffect)
setCartbtnEffect(false)
setTimeout(()=>{
    setCartbtnEffect(false)
},500)
        // dispatch({type:"addingCart",payload:data})

let arr=JSON.parse(localStorage.getItem('cart'))||[]
        // console.log(dispatch)
        // console.log("cartData",addData)
        localStorage.setItem('cart',JSON.stringify([...arr,data]))
        setCount(count+1)
        toast({
            title: 'Item Added in Cart',
            description: "Please Check out to Cart page",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
        console.log("cartData",state)
        

if(error)
{
    return <Text fontSize={'4xl'} >Something Went wrong!!!</Text>

}

return <Box w={'70%'}m='auto' >
    {state.loading &&  <Text>..Loading</Text> }
    <SimpleGrid  gap={'20px'}  columns={2}  >
        <Skeleton isLoaded={!state.loading} >
<Box p={'20px'}  > <Image src={data.image}  /> </Box></Skeleton>
<Skeleton isLoaded={!state.loading}  >
<Box textAlign={'left'} p={'30px'} >

<Text> <b>{data.title} </b>  </Text>
<Text> <b> Category : {data.category} </b>  </Text>
<Text> <b>Price :  ${data.price} </b> Inclusive of all taxes </Text>
<Text> <b>Rating : {data?.rating?.rate} </b>  </Text>
<Text> <b> Totel Buyer of Rating : {data?.rating?.count} </b>  </Text>
<Text> <b> Totel Buyer of Rating : {data.description} </b>  </Text>
 
<Button bg={'#303AB2'} disabled={count==1} color='white' colorScheme={"blue"} onClick={addCartHnadler} >  {    cartbtnEffect?<Spinner/>:"ADD TO BASKET"} </Button>
<br/>
<br />
<Flex>
    <Box><i className="fa-solid fa-heart-circle-plus"></i>  Add to Favourites</Box>
    <Spacer/>
    <Box> <i className="fa-solid fa-share-nodes"></i> Share</Box>
</Flex>
    <Text><i className="fa-solid fa-truck"></i>  When will I receive my order?</Text>
<Flex>
    <Input placeholder={'enter your pin code'} /><Button bg={'#303AB2'} color='white' colorScheme={"blue"}  >Check</Button>
</Flex>
<br /><br />
<Box borderTop='1px solid gray' >
over view
<ul>
    <li>Type : Crew Neck</li>
    <li>Design : Printed</li>
    <li>Sleeve Length : Half Sleeves</li>
    <li>Fabric : Polyester</li>
    <li>Fit : Slim Fit</li>
    <li>Care Instructions : Machine Wash
</li>
    <li>Model Wears : Size M,has Height 6'0" and Chest 38"</li>
    <li>Return Policy : This product is returnable within 30 days of delivery</li>
    <li>Product : T-shirt  </li>
  
    <li>Country of Origin : India</li>
    <li>Manufactured By : Lifestyle Int Pvt Ltd, 77 Degree Town</li>
    <li>Manufactured By : Lifestyle Int Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur, Bangalore-560037</li>
    <li>For Consumer Complaints Contact : Manager Commercial,77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur PO., Bangalore-560037, Phone: 1800-123-1444, help.in@maxfashion.com</li>
    <li>Net Quantity : 1 N</li>
    
</ul></Box>

</Box></Skeleton>


    </SimpleGrid>

{/* <Flex  columns={4} >
<Text>You may also like</Text>

    <Box border={'1px solid red'} >

<Image w={"100%"} h='70%' src={'https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011476674-Red-BURGUNDY-1000011476674-12062022_01-2100.jpg'}/>
<Text>399</Text>
<Text>MAX Men Textured Slim Fit Sport T-Shirt</Text>
    </Box>
    <Box>

<Image w={"100%"} h='70%' src={'https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011476674-Red-BURGUNDY-1000011476674-12062022_01-2100.jpg'}/>
<Text>399</Text>
<Text>MAX Men Textured Slim Fit Sport T-Shirt</Text>
    </Box>
    <Box>

<Image w={"100%"} h='70%' src={'https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011476674-Red-BURGUNDY-1000011476674-12062022_01-2100.jpg'}/>
<Text>399</Text>
<Text>MAX Men Textured Slim Fit Sport T-Shirt</Text>
    </Box>
    <Box>

<Image w={"100%"} h='70%' src={'https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011476674-Red-BURGUNDY-1000011476674-12062022_01-2100.jpg'}/>
<Text>399</Text>
<Text>MAX Men Textured Slim Fit Sport T-Shirt</Text>
    </Box>
   
</Flex> */}





</Box>



}