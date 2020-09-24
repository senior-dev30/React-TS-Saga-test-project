import styled from 'styled-components';
import { Flex as BaseFlex, Box as BaseBox } from 'reflexbox';

export const Flex = styled(BaseFlex).attrs({
  flexWrap: 'nowrap',
})`
  padding: 0;
  border: 0;
  display: block;
  box-sizing: border-box;
  line-height: 100%;
  font-size: 100%;
  font: inherit;
  line-height: 100%;
`;

export const FlexWithRelative = styled(Flex)`
  position: relative;
`;

export const Box = styled(BaseBox)`
  padding: 0;
  border: 0;
  display: block;
  box-sizing: border-box;
  line-height: 100%;
  font-size: 100%;
  font: inherit;
  line-height: 100%;
`;
