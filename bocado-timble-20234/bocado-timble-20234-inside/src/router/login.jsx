import { Input, Stack,Button, Heading,Text, useToast, Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Appcontext } from "../context/appcontext";
import Singup from "./singup";

export default function Login(){
    const{dispatch,state}=useContext(Appcontext)
    const[singupback,setSingup]=useState(false)
    const toast = useToast()
    // console.log(state)
    const singup=state.singupData
const[loginData,setLoginData]=useState({
    email:'',
    password:''
})


const navigate=useNavigate()
function handleLogin(){
// console.log(singup,loginData)
// dispatch({type:"singupSuccess",payload:singUpData})
let count=0
for(let i=0;i<singup.length;i++)
{
    if(singup[i].email==loginData.email && singup[i].password==loginData.password)
    {count++
       
    }
}
if(count>0)
{
    // console.log(loginData)
    dispatch({type:'loginSuccess',payload:{...loginData}})
    toast({
        title: 'Login Success.',
        description: "Welcome to shoping world.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position:"top"
      })
      navigate('/')
}
else{
    toast({
        title: 'error.',
        description: "Please enter valid user id and password !",
        duration: 9000,
        isClosable: true,
        position:"top",
        status:'error'

      })
   
}

}

const backBtn=()=>{

    setSingup(true)
}

if(singupback)
{
    return <Singup/>
}

return <Stack  >
<Heading>Login</Heading>
<Input name="email" value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} placeholder="Enter Email" />
<Input name="password" value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})} placeholder="Enter Password" />
<Button onClick={handleLogin}  colorScheme={'blue'} >Login</Button>
<Button onClick={backBtn} >Back</Button>
<Box>are you new User? <Text onClick={backBtn} color={'blue'} >Click Here</Text></Box>
</Stack>



}