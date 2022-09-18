import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Status } from '../types/dynamic-island';
import Clock from './clock';
import DynamicIsland from './dynamic-island';

const StatusBar: React.FC = () => {
  const [status, setStatus] = useState<Status>('normal');

  return (
    <Row>
      <ColLeft>
        <Clock />
      </ColLeft>
      <ColCenter>
        <DynamicIsland status={status} setStatus={setStatus} />
        <CameraWrap>
          <Image src='/camera.svg' alt='camera' width={18} height={18} />
        </CameraWrap>
      </ColCenter>
      <ColRight>
        <Image src='/mobile-signal.svg' alt='mobile signal icon' width={18} height={12} />
        <Image src='/battery-icon.svg' alt='battery icon' width={28} height={14} />
      </ColRight>
    </Row>
  );
};

export default StatusBar;

const Row = styled.div`
  --top: 16px;

  position: absolute;
  top: var(--top);
  left: 0;

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 22px;
  transition: all 0.25s;
`;

const ColLeft = styled.div``;

const ColCenter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  transform: translateY(calc((var(--top) * -1) / 2));
`;

const CameraWrap = styled.div`
  position: absolute;
  top: 8px;
  right: 37%;
`;

const ColRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6px;
`;
