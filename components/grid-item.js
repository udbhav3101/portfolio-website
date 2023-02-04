import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Text, LinkBox, LinkOverlay, Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumnail}
        alt={title}
        placeholder="blur"
        loading="lazy"
        height={100}
        width={100}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox scroll={false} cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          loading="lazy"
          height={100}
          width={100}
        />
        <LinkOverlay as="div" href={`/works/${id}`}>
        <Heading as= "h3" variant="heading-post">
            {title}
          </Heading>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
