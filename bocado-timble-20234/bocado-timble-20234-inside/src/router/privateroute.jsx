import { useToast } from "@chakra-ui/react"
import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Appcontext } from "../context/appcontext"

export default function PrivateRoute({children}){
  const toast = useToast()
const {state}=useContext(Appcontext)
// console.log(state)
const navigate=useNavigate()
if(!state.isAuth)
{
  toast({
    title: 'You Need To Login First.',

    status: 'warning',
    duration: 9000,
    isClosable: true,
    position:'top'
  })
  return  <Navigate to='/login' />

}


return children



}