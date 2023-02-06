import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;
`;

const Logo = () => {
  const serverLogo = `/images/logo.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={serverLogo} width={30} height={30} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS ROUNDED 1c"
            fontWeight="bold"
            ml={3}>
            Portfolio
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
