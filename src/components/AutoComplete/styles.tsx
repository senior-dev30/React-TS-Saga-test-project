import styled from 'styled-components';
import { FlexWithRelative } from '../../common/style';
import { Input } from '../Input/input';

export const Panel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

export const StyledInputWrapper = styled(FlexWithRelative)<{ opened: boolean }>`
  z-index: 10;
  width: 100%;
`;

export const MenuInput = styled(Input)`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  display: flex;
  align-items: center;
  min-width: 180px;
  color: #4c4f50;
`;

export const StyledContainer = styled.div`
  margin-top: -2px;
`;

export const MenuListWrapper = styled.div`
  margin-top: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
`;

export const List = styled.div<{ isActived?: boolean }>`
  padding: 4px 15px 6px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #4c4f50;
  font-family: Arial;
  font-style: normal;
  font-size: 14px;
  background: ${props => (props.isActived ? '#e8e8ee' : '#ffffff')};
  &:hover {
    background: #e8e8ee;
  }
`;
