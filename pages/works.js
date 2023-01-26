import { Center, Text } from '@chakra-ui/react';
import Section from '../components/section';
import React from 'react';
import {Image} from '@chakra-ui/react';

const Works = () => {
  return (
    <Section delay={0.1}>
      <Center display={{ md: 'flex' }} >
        <Text fontSize="3xl">  Coming Soon </Text>
        <Image
          maxWidth={"500px"}
          mt={100}
          src="/assets/ComingSoon.svg"
          alt="Profile Picture"
        />
    </Center>
    </Section>
  );
};

export default Works;
