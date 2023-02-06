import NextLink from 'next/link';
import Logo from './logo';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import ThemeToggleButton from './theme-toggle-button.js';

const LinkItem = ({ href, path, children, target, ...props }) => {
  const active = path === href;
  const inactivecolor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        color={active ? '#202023' : inactivecolor}
        bg={active ? 'darkGreen' : undefined}
        borderRadius={active ? 'base' : undefined}
        target={target}
        {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(40px)' }}
      zIndex={2}
      {...props}>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/resume" path={path}>
            Resume
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/udbhav3101"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}>
            <IoLogoGithub />
            Github
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://www.linkedin.com/in/udbhav-govindu/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}>
            <IoLogoLinkedin />
            LinkedIn
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>

                <NextLink href="/resume" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>

                <MenuItem
                  as={Link}
                  target="_blank"
                  href="https://github.com/udbhav3101">
                  <IoLogoGithub /> &nbsp; Github
                </MenuItem>

                <MenuItem
                  as={Link}
                  target="_blank"
                  href="https://www.linkedin.com/in/udbhav-govindu/">
                  <IoLogoLinkedin /> &nbsp; LinkedIn
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Navbar;
