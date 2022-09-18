import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import CircleBgText from './circle-background-text';
import ScoringTime from './scoring-time';

const MatchDetail: React.FC = () => {
  return (
    <StyledRow>
      <StyledCol>
        <Image src='/turkiye-flag.png' alt='Turkiye flag' width={48} height={48} />
        <StyledSpan>Türkiye</StyledSpan>
        <CircleBgText
          data={[
            {
              letter: 'G',
              color: '#25AD0E',
            },
            {
              letter: 'Y',
              color: '#C61010',
            },
            {
              letter: 'B',
              color: '#D79515',
            },
            {
              letter: 'G',
              color: '#25AD0E',
            },
          ]}
        />
      </StyledCol>
      <StyledCol>
        <StyledScore>3 - 2</StyledScore>
      </StyledCol>
      <StyledCol>
        <Image src='/ispanya-flag.png' alt='İspanya flag' width={48} height={48} />
        <StyledSpan>Ispanya</StyledSpan>
        <CircleBgText
          data={[
            {
              letter: 'G',
              color: '#25AD0E',
            },
            {
              letter: 'Y',
              color: '#C61010',
            },
            {
              letter: 'G',
              color: '#25AD0E',
            },
            {
              letter: 'Y',
              color: '#C61010',
            },
          ]}
        />
      </StyledCol>
      <ScoringTime />
    </StyledRow>
  );
};

export default MatchDetail;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 15px;
  margin: 0 auto;
  min-height: 230px;
  width: 344px;
  max-width: 100%;

  color: white;
  font-size: 14px;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.25s 0.2s ease-in-out forwards;
`;

const StyledCol = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledScore = styled.span`
  font-size: 22px;
  margin: 12px;
`;

const StyledSpan = styled.span`
  margin: 12px 0 9px;
`;
