import { Box, Stack,Image, SimpleGrid,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Product from "./product";

export default function Home(){
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        window.document.title='Home page'   
       
    },[])
const carousel=["https://www.maxfashion.in/in/en/c/maxwomen-sportswear"]

return <Stack w={'80%'} p='20px'  m='auto' >


<Box     > <Image src='https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-CommonFREESHIPPING-18Aug2022.gif'/>  </Box>
<Box    > <Image src='https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-9modularblock-oneBythree-A-Women-18JULY2022.png'/>  </Box>


<SimpleGrid columns={2} >
    <Box><Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-Women-modularblock8-oneBythree-A-men-11Aug2022.png" /></Box>

<Box><Image src='https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-B-men-18Aug2022.png'/></Box>
<Box><Image src='https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-10modularblock-oneBythree-A-Men-18Aug2022.png'/></Box>
<Box><Image src='https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-10modularblock-oneBythree-B-Men-18Aug2022.png' /></Box>

<Box><Image src='https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-5modularblock-oneBytwo1C-Men-11Aug2022.png'/></Box>
<Box><Image src='https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-E-Men-11Aug2022.png'/></Box>
<Box><Image src='https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock16One-Men-11Aug2022.png'/></Box>
<Box><Image src='https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock16Two-Men-11Aug2022.png'/></Box>


</SimpleGrid>

<Box><Image src='https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/department-modularblock-oneBythree-C-Men-05AUG2022.gif' /></Box>
<Box></Box>
<Box    > <Image src='https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock14One-Women-26Oct2021.jpg'/>  </Box>
<Box    > <Image src='https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-A-Women-21Oct2020.jpg'/>  </Box>

<Box><Image src='https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-D-Men-18JULY2022.png'/></Box>

</Stack>





}