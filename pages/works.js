import { Container, SimpleGrid, Heading, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '../components/grid-item';
import Section from '../components/section';
import Jobbers from '../public/images/Jobbers.png';
import Reddit from '../public/images/Reddit.png';
import LinkShortner from '../public/images/LinkShortener.png';
import React from 'react';
import { useIntl } from 'react-intl';
const Works = () => {
  const intl = useIntl();
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={10}>
        {intl.formatMessage({ id: 'workPage.header' })}
      </Heading>
      <Divider mb={8} />
      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        <Section>
          <WorkGridItem
            id="jobbers"
            title={intl.formatMessage({ id: 'workPage.jobbers.title' })}
            thumbnail={Jobbers}>
            {intl.formatMessage({ id: 'workPage.jobbers.body' })}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="reddit"
            title={intl.formatMessage({ id: 'workPage.reddit.title' })}
            thumbnail={Reddit}>
            {intl.formatMessage({ id: 'workPage.reddit.body' })}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="reddit"
            title={intl.formatMessage({ id: 'workPage.linkShortener.title' })}
            thumbnail={LinkShortner}>
            {intl.formatMessage({ id: 'workPage.linkShortener.body' })}
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
