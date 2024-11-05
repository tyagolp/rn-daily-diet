import styled from "styled-components/native";
import { BodyXS } from "../BodyXS";
import { BodyM } from "../BodyM";

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(x) => x.theme.COLORS.GRAY4};
  padding: 10px;
  border-radius: 6px;
  margin: 5px 0;
`;

export const Time = styled(BodyXS)`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY1};
`;
export const Description = styled(BodyM)`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY2};
  margin-right: 20px;
`;

export const Divider = styled.View`
  height: 20px;
  width: 1px;
  background-color: ${(x) => x.theme.COLORS.GRAY4};
  margin: 0 5px;
`;
