import React from "react"
import { Box } from "@chakra-ui/react"
import { IoMdCloseCircle } from "react-icons/io"
import { MdOutlineMenuOpen } from "react-icons/md"
    
    
    const MenuToggle = ({ toggle, isOpen }) => {
        
        return (
          <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ?  <IoMdCloseCircle /> : <MdOutlineMenuOpen />}
          </Box>
        )
      }
      export default MenuToggle ;
 
