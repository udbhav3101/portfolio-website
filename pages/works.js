import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { WorkGridItem } from '../components/grid-item';
import Section from '../components/section';
import Blog from '../public/images/Blog.png';
import EmojiChat from '../public/images/EmojiChat.svg';
import Jobbers from '../public/images/Jobbers.png';
import LinkShortner from '../public/images/LinkShortener.png';
import Reddit from '../public/images/Reddit.png';
import ShoppingApp from '../public/images/ShoppingApp.png';
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
            id="VideoChatApplication"
            title={intl.formatMessage({
              id: 'workPage.emojiOnlyTwitter.title',
            })}
            thumbnail={EmojiChat}>
            {intl.formatMessage({ id: 'workPage.emojiOnlyTwitter.body' })}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="linkShortner"
            title={intl.formatMessage({ id: 'workPage.linkShortener.title' })}
            thumbnail={LinkShortner}>
            {intl.formatMessage({ id: 'workPage.linkShortener.body' })}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="shoppingApp"
            title={intl.formatMessage({ id: 'workPage.shoppingApp.title' })}
            thumbnail={ShoppingApp}>
            {intl.formatMessage({ id: 'workPage.shoppingApp.body' })}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="VideoChatApplication"
            title={intl.formatMessage({ id: 'workPage.reactBlog.title' })}
            thumbnail={Blog}>
            {intl.formatMessage({ id: 'workPage.reactBlog.body' })}
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
