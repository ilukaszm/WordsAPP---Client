import React, { FC } from 'react';
import styled from 'styled-components';

import { Paragraph, Avatar } from 'components';

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PlayersWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Player = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;

  > p {
    margin-left: 16px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bolds.bold};
`;

interface Players {
  email: string;
  avatarURL: string;
  gamePoints: number;
}
interface GameStatsPageTemplateProps {
  gameStats: Players[];
}

const GameStatsPageTemplate: FC<GameStatsPageTemplateProps> = ({ gameStats }) => {
  return (
    <div>
      <InnerWrapper>
        <StyledParagraph>Top players:</StyledParagraph>
        <StyledParagraph>Points:</StyledParagraph>
      </InnerWrapper>
      <PlayersWrapper>
        {gameStats.map(({ email, avatarURL, gamePoints }) => (
          <>
            <Player>
              <Avatar avatarURL={avatarURL} />
              <Paragraph>{email}</Paragraph>
            </Player>
            <Player>
              <Paragraph>{gamePoints}</Paragraph>
            </Player>
          </>
        ))}
      </PlayersWrapper>
    </div>
  );
};

export default GameStatsPageTemplate;
