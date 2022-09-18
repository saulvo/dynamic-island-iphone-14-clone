import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface DataType {
  minute: number;
  type: 'goal' | 'red-card' | 'yellow-card';
}
const turkiyeData: DataType[] = [
  {
    minute: 21,
    type: 'goal',
  },
  {
    minute: 36,
    type: 'goal',
  },
  {
    minute: 49,
    type: 'yellow-card',
  },
  {
    minute: 88,
    type: 'goal',
  },
  {
    minute: 74,
    type: 'red-card',
  },
];
const ispanyaData: DataType[] = [
  {
    minute: 41,
    type: 'goal',
  },
  {
    minute: 83,
    type: 'goal',
  },
  {
    minute: 84,
    type: 'yellow-card',
  },
];
const ScoringTime: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledUL>
        {turkiyeData.map((item, idx) => (
          <StyledLI key={idx}>
            <Image
              src={`/${item.type === 'goal' ? 'ball' : item.type}.png`}
              alt={item.type}
              width={12}
              height={12}
              objectFit='contain'
            />
            <span>{item.minute + "'"}</span>
          </StyledLI>
        ))}
      </StyledUL>
      <StyledUL>
        {ispanyaData.map((item, idx) => (
          <StyledLI key={idx}>
            <Image
              src={`/${item.type === 'goal' ? 'ball' : item.type}.png`}
              alt={item.type}
              width={12}
              height={12}
              objectFit='contain'
            />
            <span>{item.minute + "'"}</span>
          </StyledLI>
        ))}
      </StyledUL>
    </StyledWrapper>
  );
};

export default ScoringTime;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  flex: 0 0 90%;
  margin: 16px auto 0;
  border-radius: 40px;
  background-color: #222;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 50%;
  list-style: none;
  padding: 0 5px;

  &:nth-child(1) {
    justify-content: right;
    border-right: 1px solid #555;
  }
  &:nth-child(2) {
    justify-content: left;
  }
`;

const StyledLI = styled.li`
  display: flex;
  flex-direction: column;
  margin: 3px;

  font-size: 8px;
  color: rgba(255, 255, 255, 0.64);
`;
