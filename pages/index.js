import NextLink from 'next/link';
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  Link,
  useColorModeValue,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';

import { ArrowRightIcon } from '@chakra-ui/icons';

const Page = () => {
  const techonologiesUsed = [
    {
      name: 'ReactJS',
      link: 'https://reactjs.org/',
    },
    {
      name: 'NodeJS',
      link: 'https://nodejs.org/en/',
    },
    {
      name: 'Redux',
      link: 'https://redux.js.org/',
    },
    {
      name: 'TailwindCSS',
      link: 'https://tailwindcss.com/',
    },
    {
      name: 'ViteJS',
      link: 'https://vitejs.dev/',
    },
    {
      name: 'Git',
      link: 'https://git-scm.com/',
    },
    {
      name: 'Postgres',
      link: 'https://www.postgresql.org/',
    },
    {
      name: 'Django',
      link: 'https://www.djangoproject.com/',
    },
    {
      name: 'Sass',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'MongoDB',
      link: 'https://www.mongodb.com/',
    },
    {
      name: 'Firebase',
      link: 'https://firebase.google.com/',
    },
  ];
  const projects = [
    {
      title: 'Jobbers',
      link: '/works/jobbers',
    },
    {
      title: 'Link Shortner',
      link: '/works/link-shortner',
    },
    {
      title: 'Shopping App',
      link: '/works/shopping-app',
    },
    {
      title: 'Reddit Clone',
      link: '/works/reddit-clone',
    },
  ];
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={5}
        align="center">
        Hello, I&apos;m Udbhav a Software Developer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Udbhav Govindu
          </Heading>
          <p>Interests - Web and App Development</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/udbhav.jpg"
            alt="Profile Picture"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me 👷
        </Heading>
        <Paragraph>
          I am, a Senior at KL University Vijayawada specialised
          in Big Data. I am currently working on Frontend, Backend Developement, and also on Mobile App Development.
        </Paragraph>

        <Heading as="h3" variant="section-title" pt={10}>
          Works 🛠
        </Heading>
        <Paragraph>Recent Projects I&apos;ve worked on.</Paragraph>
        <UnorderedList mt={5}>
          {projects.map(({ title, link }) => (
            <ListItem key={title}>
              <NextLink href={link}>
                <Link>{title}</Link>
              </NextLink>
            </ListItem>
          ))}
        </UnorderedList>

        <Heading as="h3" variant="section-title" pt={10}>
          Worked using 💾
        </Heading>
        <Box mt={{ base: 4, md: 0 }} align="center">
          {techonologiesUsed.map(({ name, link }) => (
            <Link key={link} href={link} isExternal>
              <Image
                borderColor="whiteAlpha.800"
                mb={4}
                maxWidth="100px"
                display="inline-block"
                mr={4}
                src={`/assets/${name}.svg`}
                alt={`${name}`}
              />
            </Link>
          ))}
        </Box>
        <Box align="center" my={4} mt={10}>
          <NextLink href="/resume">
            <Button rightIcon={<ArrowRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
