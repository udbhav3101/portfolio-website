import NextLink from 'next/link';
import { Container, Box , Button, Heading, Image, Link, useColorModeValue, ListItem, OrderedList} from "@chakra-ui/react";
import {CheckIcon, MdCheckCircle} from "@chakra-ui/icons";
import Section from '../components/section';
import Paragraph from '../components/paragraph';

import {ArrowRightIcon} from '@chakra-ui/icons';

const Page = () =>{
  return (
    <Container> 
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')} p={3} mb={6} mt={5} align="center">
        Hello, I&apos;m Udbhav a Machine Learning enthusiast and a Web Developer.
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Udbhav Govindu
          </Heading>
        <p>Interests - Web and App Development</p>
        </Box>
        <Box
        flexShrink={0}
        mt={{base: 4, md: 0}}
        ml={{md: 6}}
        align="center">
          <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/udbhav.jpg"
          alt="Profile Picture"/>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me 👷
        </Heading>
        <Paragraph>
        I am Udbhav Govindu, a Senior at KL University Vijayawada specialised in Big Data. Aspiring Software Developer 
        interested in Frontend Developement, Backend Developement, and Mobile App Development.
        </Paragraph>

        <Heading as="h3" variant="section-title">
          Works 🛠
        </Heading>
        <Paragraph> 
          Recent Projects I&apos;ve worked on.
        </Paragraph>
        <OrderedList>
          <ListItem> 
            <NextLink href="/works/jobbers"><Link>Jobbers</Link>
            </NextLink>
          </ListItem>
        </OrderedList>
        <Box align="center" my={4}>
        <NextLink href="/resume">
          <Button rightIcon={<ArrowRightIcon/>} colorScheme="teal">My Resume</Button>
        </NextLink>
        </Box>
      </Section>
    </Container>
  )
  
}

export default Page;