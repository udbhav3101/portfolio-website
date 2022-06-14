import { Container, Box , Heading} from "@chakra-ui/react";

const Page = () =>{
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m Udbhav a Machine Learning enthusiast and a Web Developer.
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Udbhav Govindu
          </Heading>
        <p>Machine Learning, Frontend, Backend</p>
        </Box>
      </Box>
    </Container>
  )
  
}

export default Page;