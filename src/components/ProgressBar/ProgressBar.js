/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

//const ProgressBar = ({ value, size }) => {
//  return <strong>{value}</strong>;
//};

const sizes = {
  small: {
    '--height': '8px',
    '--bar-height': '8px',
    '--padding': '0px'
  },
  medium: {
    '--height':'12px',
    '--bar-height': '12px',
    '--padding': '0px'
  },
  large: {
    '--height': '24px',
    '--bar-height': '16px',
    '--padding': '4px'
  }
}


const ProgressBar = ({ value, size }) => {

  const styles = sizes[size];
  console.log(styles);

  const progress = value/100

  return (
    <BarContainer style={styles} >
      <BarWrapper>
        <Bar value={value} style={styles}></Bar>
      </BarWrapper>
    </BarContainer>
  );
};


const BarContainer = styled.div`
  width: 100%;
  height: var(--height);
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  padding: var(--padding);
  /* Trim off corner when progress bar near full*/
  
`
const BarWrapper = styled.div`
  border-radius: 8px;
  overflow:hidden;
`

const Bar = styled.div`
  width: ${props=>props.value}%;
  height: var(--bar-height);
  background: #4747EB;
  border-radius: 4px 0px 0px 4px;
`


export default ProgressBar;
