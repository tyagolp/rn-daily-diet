import styled from "styled-components/native";

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${(x) => x.theme.SIZES.xxl};
  color: ${({ theme }) => theme.COLORS.GRAY1};
`;
