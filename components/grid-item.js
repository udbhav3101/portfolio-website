import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

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
  <Card>
    <NextLink href={`/works/${id}`}>
      <LinkBox scroll={false} cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          loading="lazy"
          width={100}
          height={100}
        />
        <LinkOverlay as="div" href={`/works/${id}`}>
          <Heading as="h3" variant="heading-post">
            {title}
          </Heading>
        </LinkOverlay>
      </LinkBox>
    </NextLink>
  </Card>
);

// create a card with twitch hover effect using styled components
const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${props => props.thumbnail});
  text-align: center;
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background: #0000;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 40px #9147ff;
    transform: scale(1.05);
  }
`;
