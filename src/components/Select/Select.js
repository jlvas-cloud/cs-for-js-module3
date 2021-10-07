import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectStyle value={value} onChange={onChange}>      
      {children}  
      
      </SelectStyle>
      <IconWrapper>
        <Icon id="chevron-down"/>
      </IconWrapper>
  
    </Wrapper>
    
    
    
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const SelectStyle = styled.select`
  width: 191px;
  height: 43px;
  padding: 12px 0px 12px 16px;
  background: rgba(128, 128, 128, 0.15);
  border-radius: 8px;
  appearance: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: hsla(0, 0%, 40%, 1);

  &:hover{
    color: hsla(0, 0%, 0%, 1);
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  right: 10px;  
  margin:auto;
  pointer-events:none;
  height: 24px;
`

export default Select;
