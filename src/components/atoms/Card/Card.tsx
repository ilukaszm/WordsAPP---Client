import React, { FC, useState } from 'react';

import { Paragraph } from 'components';
import { StyledCard } from './Card.styled';

interface CardProps {
  textFirst: string;
  textSecond: string;
}

const Card: FC<CardProps> = ({ textFirst, textSecond }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <StyledCard onClick={() => setClicked((prevState) => !prevState)} clicked={clicked}>
      <div>
        <figure>
          <Paragraph>{textFirst}</Paragraph>
        </figure>
        <figure>
          <Paragraph>{textSecond}</Paragraph>
        </figure>
      </div>
    </StyledCard>
  );
};

export default Card;
