import NextLink from 'next/link';
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  Link,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Section from '../components/section';
import Paragraph from '../components/paragraph';

import { ArrowRightIcon } from '@chakra-ui/icons';
import { useIntl } from 'react-intl';

const Page = () => {
  const intl = useIntl();
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
    {
      name: 'Prisma',
      link: 'https://www.prisma.io/',
    },
  ];
  const projects = [
    {
      title: 'Jobbers',
    },
    {
      title: 'Link Shortner',
    },
    {
      title: 'Shopping App',
    },
    {
      title: 'Reddit Clone',
    },
    {
      title: 'Video Chat',
    },
    {
      title: 'Blog',
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
        {intl.formatMessage({ id: 'mainPage.header.content' })}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            {intl.formatMessage({ id: 'mainPage.title' })}
          </Heading>
          <p>{intl.formatMessage({ id: 'mainPage.interests' })}</p>
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
            src="/images/udbhav_profile.png"
            alt="Profile Picture"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {intl.formatMessage({ id: 'mainPage.about' })}
        </Heading>
        <Paragraph>
          {intl.formatMessage({ id: 'mainPage.about.body' })}
        </Paragraph>

        <Heading as="h3" variant="section-title" pt={10}>
          {intl.formatMessage({ id: 'mainPage.work' })}
        </Heading>
        <Paragraph>
          {intl.formatMessage({ id: 'mainPage.work.body' })}
        </Paragraph>
        <List mt={5}>
          {projects.map(({ title }) => (
            <ListItem key={title}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {title}
            </ListItem>
          ))}
        </List>

        <Heading as="h3" variant="section-title" pt={10}>
          {intl.formatMessage({ id: 'mainPage.workedOn' })}
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
              {intl.formatMessage({ id: 'mainPage.button.resume' })}
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
