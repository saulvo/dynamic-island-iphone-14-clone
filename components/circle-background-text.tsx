import React from 'react';
import styled from 'styled-components';

interface Props {
  data: {
    color: string;
    letter: string;
  }[];
}

const CircleBgText: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      {data.map((item, idx) => (
        <span key={idx} style={{ ['--color' as string]: item.color }}>
          {item.letter}
        </span>
      ))}
    </StyledBox>
  );
};

export default CircleBgText;

const StyledBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  span {
    display: grid;
    place-items: center;
    
    margin: 3px;
    width: 16px;
    aspect-ratio: 1;
    border-radius: 50%;
    font-size: 8px;

    color: white;
    background-color: var(--color);
  }
`;
