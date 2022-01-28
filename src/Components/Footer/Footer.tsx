import React from 'react';

import { Container, Brand, Infos, Info, Icons } from './Footer.style';
import { ReactComponent as FacebookIcon } from 'images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from 'images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from 'images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from 'images/icon-instagram.svg';

const Footer = () => {
  return (
    <Container>
      <Brand>Shortly</Brand>
      <Infos>
        <Info>
          <h4>Features</h4>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </Info>
        <Info>
          <h4>Resources</h4>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </Info>
        <Info>
          <h4>Company</h4>
          <span>About</span>
          <span>Our Team</span>
          <span>Careers</span>
          <span>Contact</span>
        </Info>
      </Infos>
      <Icons>
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <InstagramIcon />
      </Icons>
    </Container>
  );
};

export default Footer;
