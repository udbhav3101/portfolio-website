import Section from '../components/section';
import React from 'react';
import { Center, Text, Image } from '@chakra-ui/react';

const CommingSoon = () => {
  return (
    <Section delay={0.1}>
      <Center display={{ md: 'flex' }}>
        <Text fontSize="3xl"> Coming Soon </Text>
        <Image
          maxWidth={'500px'}
          mt={50}
          src="/assets/ComingSoon.svg"
          alt="Profile Picture"
        />
      </Center>
    </Section>
  );
};

export default CommingSoon;
