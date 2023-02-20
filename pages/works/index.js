import { Container, SimpleGrid, Heading, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '../../components/grid-item';
import Section from '../../components/section';
import Jobbers from '../../public/images/Jobbers.png';
import Reddit from '../../public/images/Reddit.png';
import LinkShortner from '../../public/images/LinkShortener.png';
import ShoppingApp from '../../public/images/ShoppingApp.png';
import VieoChat from '../../public/images/VideoChat.png';
import Blog from '../../public/images/Blog.png';
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
            id="jobber"
            title={intl.formatMessage({ id: 'workPage.jobbers.title' })}
            thumbnail={Jobbers}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="reddit"
            title={intl.formatMessage({ id: 'workPage.reddit.title' })}
            thumbnail={Reddit}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="reddit"
            title={intl.formatMessage({ id: 'workPage.linkShortener.title' })}
            thumbnail={LinkShortner}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="shoppingApp"
            title={intl.formatMessage({ id: 'workPage.shoppingApp.title' })}
            thumbnail={ShoppingApp}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="VideoChatApplication"
            title={intl.formatMessage({ id: 'workPage.videoChat.title' })}
            thumbnail={VieoChat}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="VideoChatApplication"
            title={intl.formatMessage({ id: 'workPage.reactBlog.title' })}
            thumbnail={Blog}
          />
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
