import { Box,Button,Image,Select,SimpleGrid,Stack,Text,Option,Flex, Spinner,Skeleton, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Appcontext } from "../context/appcontext";
const url=`https://fakestoreapi.com/products/category/`

const getData=(sort,category)=>{
    return axios.get(url+`${category}'s%20clothing`)
}
export default function Product(){
    const params=useParams()
    // console.log(params)
const [data,setData]=useState([])
const[sort,setSort]=useState('asc')
const[category,setCategory]=useState(params.cat)
const {state,dispatch}=useContext(Appcontext)
const [error,setError]=useState(false)
const toast = useToast()
// const[cartData,setCartData]=useState(cart)

    useEffect(()=>{
        dispatch({type:'loading'})
getData(sort,category).then((res)=>{
    // setData(res.data)
    // console.log(res.data)
    dispatch({type:'getproducts',payload:res.data})
    setError(false)
}).catch((err)=>{
    setError(true)
})

    window.document.title='Product page'   

    },[category])

const handleSort=(e)=>{
    dispatch({type:'loading'})
let x= e.target.value
if(x=='asc')
{
    let newData=state.products.sort((a,b)=>{
        return a.price-b.price
    })
    dispatch({type:'getproducts',payload:newData})
    
}

else{
    dispatch({type:'loading'})
    let newData=state.products.sort((a,b)=>{
        return b.price-a.price
    })
    dispatch({type:'getproducts',payload:newData})
   
}

}
const handleCategory=(e)=>{
    dispatch({type:'loading'})
setCategory(e.target.value)
}

const handleSortbyRating=(e)=>{
    dispatch({type:'loading'})
let x= e.target.value
if(x=='asc')
{
    let newData=state.products.sort((a,b)=>{
        return a.rating.rate-b.rating.rate
    })
    dispatch({type:'getproducts',payload:newData})
    
}

else{
    dispatch({type:'loading'})
    let newData=state.products.sort((a,b)=>{
        return b.rating.rate-a.rating.rate
    })
    dispatch({type:'getproducts',payload:newData})
   
}
}


const handleCart=(ele)=>{
    let cart=JSON.parse(localStorage.getItem('cart'))||[]

localStorage.setItem('cart',JSON.stringify([...cart,ele]))
toast({
    title: "Item added is basket",
    status: 'info',
    isClosable: true,
    position:'top'
  })
}




if(error)
{
    return <Text fontSize={'4xl'} >Something Went wrong!!!</Text>
}
return <Stack p={'50px'} >
<Flex w={{base:"100%",sm:'100%',md:'70%',lg:'50%',xl:'50%'}} m='auto'  >
<Select onChange={handleSort} placeholder='Sort By Price'>
  <option value='asc'>Low to High</option>
  <option value='desc'>High to Low</option>
</Select>
<Select onChange={handleCategory} placeholder='Category'>
  <option value='men'>Men</option>
  <option value='women'>Women</option>
</Select>
<Select onChange={handleSortbyRating} placeholder='ratings'>
  <option value='asc'>Low to High</option>
  <option value='desc'>High to Low</option>
</Select>
</Flex>

{state.loading&&<Box fontSize={'4xl'} >loading <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  
/>  </Box> }
<SimpleGrid  columns={{base:1, sm:1,md:1,lg:2}}  gap="10px"     >

{state.products.map((item)=>{

return <Skeleton key={item.id} w="400px" m='auto' isLoaded={!state.loading} > 
 <Box _hover={{
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
}} m={'auto'} p="5px" w="400px" h={'400px'}   boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} >
<Link to={`/product/${item.id}`} ><Image  w={'100%'} h={'50%'} src={item.image}  />
<Text  fontWeight={'bold'} fontSize='xl' >{item.title}</Text>
{/* <Text>{item.description}</Text> */}

{/* <Text><b>Category : </b>{item.category}</Text> */}
<Text><b>${item.price}</b></Text>
<Text><b>Ratings :</b> {item.rating.rate}</Text>
{/* <Text>Totel Ratings : {item.rating.count}</Text>  */}
</Link>
<Button bg={'#303AB2'} onClick={()=>handleCart(item)} colorScheme={"blue"} color='white'  >ADD TO BASKET</Button></Box></Skeleton>

})}




</SimpleGrid>
</Stack> 

}