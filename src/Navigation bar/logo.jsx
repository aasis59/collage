import logo from './assets/react.svg'
import { Box, Text } from "@chakra-ui/react"


export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}