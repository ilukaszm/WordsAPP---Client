import React, { FC } from 'react';

import { Paragraph, Avatar } from 'components';
import {
  InnerWrapper,
  StyledParagraph,
  PlayersWrapper,
  Player,
  Points,
  Numbers,
} from './GameStatsPageTemplate.styled';

interface Players {
  player: string;
  avatarURL: string;
  gamePoints: number;
}
interface GameStatsPageTemplateProps {
  gameStats: Players[];
}

const GameStatsPageTemplate: FC<GameStatsPageTemplateProps> = ({ gameStats, children }) => {
  return (
    <div>
      <InnerWrapper>
        <StyledParagraph>Top players:</StyledParagraph>
        <StyledParagraph>Points:</StyledParagraph>
      </InnerWrapper>
      <PlayersWrapper>
        {gameStats.map(({ player, avatarURL, gamePoints }) => (
          <>
            <Player>
              <Avatar avatarURL={avatarURL} />
              <Paragraph>{player}</Paragraph>
            </Player>
            <Points>
              <Numbers>{gamePoints}</Numbers>
            </Points>
          </>
        ))}
      </PlayersWrapper>
      {children}
    </div>
  );
};

export default GameStatsPageTemplate;
