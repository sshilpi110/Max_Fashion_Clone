import { Input, Stack,Button, Heading, useDisclosure,Box, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Modal,Text, useToast } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/appcontext";

import Login from "./login";

export default function Singup(){
    const{dispatch,state}=useContext(Appcontext)
    // console.log(dispatch,state)
const[singUpData,setSingUpData]=useState({
    name:'',
    email:'',
    password:''
})
const navigate=useNavigate()
const { isOpen, onOpen, onClose } = useDisclosure()
const initialRef = useRef(null)
const finalRef = useRef(null)
const[login,setLogin]=useState(false)
const toast = useToast()
function handleSingup(){

    if(singUpData.name!=""&& singUpData.email!=""&& singUpData.password!="")
    {
        // console.log(singUpData)
        dispatch({type:"singupSuccess",payload:singUpData})
        setSingUpData({  name:'',
        email:'',
        password:''})
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position:"top"
          })

        setLogin(true)
       
    }

}

const handlegoToLogin=()=>{
    setLogin(true)
}


if(login)
{
    return <Login/>
}


return <Stack >

<Heading>Sing Up</Heading>
<Input name="name" onChange={(e)=>setSingUpData({...singUpData,name:e.target.value})} value={singUpData.name}  placeholder="Name" />
<Input name="email" value={singUpData.email} onChange={(e)=>setSingUpData({...singUpData,email:e.target.value})} placeholder="Enter Email" />
<Input name="password" value={singUpData.password} onChange={(e)=>setSingUpData({...singUpData,password:e.target.value})} placeholder="Enter Password" />
<Button onClick={handleSingup}  colorScheme={'blue'} >Sing up </Button>
<Box>already have account? <Text onClick={handlegoToLogin} color={'blue'} >Login</Text> </Box>
</Stack>



}