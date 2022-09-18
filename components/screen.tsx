import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const Screen: React.FC<Props> = ({ children }) => {
  return (
    <StyledPhoneBody>
      <Image src='/screen.png' alt='iPhone 14 screen' layout='fill' objectFit='contain' />
      <StyledPhoneScreen>{children}</StyledPhoneScreen>
    </StyledPhoneBody>
  );
};

export default Screen;

const StyledPhoneBody = styled.div`
  position: relative;

  width: 100%;
  max-width: 420px;
  aspect-ratio: 420/851;
`;

const StyledPhoneScreen = styled.div`
  --screen-border-x: calc(22 * 100% / 420);
  --screen-border-y: calc(20 * 100% / 851);

  position: absolute;
  top: var(--screen-border-y);
  left: var(--screen-border-x);

  height: calc(100% - var(--screen-border-y) * 2);
  width: calc(100% - var(--screen-border-x) * 2);
  border-radius: 50px;
`;
