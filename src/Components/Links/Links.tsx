import React from 'react';

import { LinkItem } from 'Components/App';
import { Container, Item, OriginLink, NewLink, Button } from './Links.style';

interface LinksProps {
  linkItems: LinkItem[];
  copiedLink: string;
  setCopiedLink: (copiedLink: string) => void;
}

const Links = ({ linkItems, copiedLink, setCopiedLink }: LinksProps) => {
  const renderedItems = linkItems.map(linkItem => {
    const onButtonClick: React.MouseEventHandler = event => {
      navigator.clipboard.writeText(linkItem.shorten);
      setCopiedLink(linkItem.shorten);
    };
    const isCopied = copiedLink === linkItem.shorten;
    const buttonText = isCopied ? 'copied' : 'copy';
    return (
      <Item key={linkItem.original}>
        <OriginLink>{linkItem.original}</OriginLink>
        <NewLink>{linkItem.shorten}</NewLink>
        <Button isCopied={isCopied} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Item>
    );
  });

  return <Container>{renderedItems}</Container>;
};

export default Links;
