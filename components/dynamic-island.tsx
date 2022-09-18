import Image from 'next/image';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Status } from '../types/dynamic-island';
import MatchDetail from './match-detail';

interface Props {
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
}

const DynamicIsland: React.FC<Props> = (props) => {
  const { status, setStatus } = props;
  const width: number = useMemo(() => {
    switch (status) {
      case 'normal':
        return 120;
      case 'notification':
        return 188;
      case 'viewDetail':
        return 358;
    }
  }, [status]);

  return (
    <StyledBox
      w={width}
      onMouseEnter={() => setStatus('notification')}
      onMouseLeave={() => setStatus('normal')}
      onClick={() => setStatus('viewDetail')}>
      <ScoreNotification {...props} />
      {status === 'viewDetail' && <MatchDetail />}
    </StyledBox>
  );
};

export default DynamicIsland;

const ScoreNotification: React.FC<Props> = ({ status }) => {
  return (
    <StyledScoreWrap active={status === 'notification'}>
      <StyledScore>
        <span>3&nbsp;</span>
        <Image src='/turkiye.svg' alt='turkiye' width={23} height={23} />
      </StyledScore>
      <StyledScore>
        <Image src='/ispanya.svg' alt='ispanya' width={23} height={23} />
        <span>&nbsp;2</span>
      </StyledScore>
    </StyledScoreWrap>
  );
};

const StyledBox = styled.div<{ w: number }>`
  overflow: hidden;
  position: relative;
  margin: auto;

  min-height: 35px;
  width: ${({ w }) => `calc(${w} * 100% / 376)`};
  border-radius: 40px;
  background-color: black;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
`;

const StyledScoreWrap = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  padding: 0 6px;
  border-radius: inherit;
  color: white;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
`;

const StyledScore = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
