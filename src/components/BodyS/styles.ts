import styled from "styled-components/native";

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${(x) => x.theme.SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY2};
`;
