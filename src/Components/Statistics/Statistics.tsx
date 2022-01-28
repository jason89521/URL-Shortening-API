import React from 'react';

import { Container, Heading, Text, Cards, Card, IconCircle } from './Statistics.style';
import brandIcon from 'images/icon-brand-recognition.svg';
import detailedIcon from 'images/icon-detailed-records.svg';
import customizableIcon from 'images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <Container>
      <Heading>Advanced statistics</Heading>
      <Text>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Text>
      <Cards>
        <Card>
          <IconCircle>
            <img src={brandIcon} alt="Brand Recognition" />
          </IconCircle>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't mean a thing. Branded
            links help instil confidence in your content.
          </p>
        </Card>
        <Card>
          <IconCircle>
            <img src={detailedIcon} alt="Brand Recognition" />
          </IconCircle>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with
            your content helps inform better decisions.
          </p>
        </Card>
        <Card>
          <IconCircle>
            <img src={customizableIcon} alt="Brand Recognition" />
          </IconCircle>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement.
          </p>
        </Card>
      </Cards>
    </Container>
  );
};

export default Statistics;
